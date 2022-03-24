import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { orderAction } from "../../Redux/actions/orderAction";
import "./order.scss";

export const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { userInfo } = useSelector((state) => state.userReducer);
  const { shippingAddress } = useSelector((state) => state.userReducer);
  const { paymentMethod } = useSelector((state) => state.userReducer);
  // calculation total price all product
  const totalProducts = cartItems.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price * currentValue.count;
  }, 0);
  const taxPrice = totalProducts / 10;
  // handle create new order
  const handleCreateOrder = async () => {
    const idOrderDetail = await dispatch(
      orderAction({
        orderItems: [...cartItems],
        shippingAddress,
        paymentMethod,
        totalProducts,
        taxPrice,
        shippingPrice: 9.99,
        totalPrice: totalProducts + taxPrice + 9.99,
      })
    );
    navigate(`/order/${idOrderDetail}`);
  };
  return (
    <div className='order'>
      <div className='container'>
        {userInfo && shippingAddress ? (
          <div className='order__container'>
            {/* ORDER - HEADER */}
            <div className='order__header'>
              {/* ORDER - CUSTOMER */}
              <div className='order__customer'>
                <div className='order__content'>
                  <h3>Info Customer</h3>
                  <p>{userInfo.name}</p>
                  <p>{userInfo.email}</p>
                </div>
              </div>
              {/* ORDER - INFO */}
              <div className='order__info'>
                <div className='order__content'>
                  <h3>Order info</h3>
                  <p>Shipping: Viet Nam</p>
                </div>
              </div>
              {/* ORDER - DELIVER */}
              <div className='order__deliver'>
                <div className='order__content'>
                  <h3>Deliver to</h3>
                  <div>
                    Address:
                    {` ${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.country}`}
                  </div>
                </div>
              </div>
            </div>
            {/* ORDER - MAIN */}
            <div className='order__main'>
              {/* ORDER - ALL PRODUCT BUY (CART) */}
              <div className='order__cart'>
                <div className='order__list'>
                  {cartItems.map((item) => (
                    <div className='order__item' key={item._id}>
                      <div>
                        <img
                          src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/data/${item.image}`}
                          alt=''
                        />
                      </div>
                      <div>
                        <h3>{item.name}</h3>
                      </div>
                      <div>Quantity: {item.count}</div>
                      <div>Subtotal: ${item.count * item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* ORDER - PAYMENT */}
              <div className='order__payment'>
                <table>
                  <tbody>
                    <tr>
                      <td>Products</td>
                      <td>${totalProducts}</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>$9.99 (Fixed)</td>
                    </tr>
                    <tr>
                      <td>Tax (10%)</td>
                      <td>${taxPrice}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>${(totalProducts + totalProducts / 10 + 9.99).toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className='order__button button button__sky'
                  onClick={() => handleCreateOrder()}
                >
                  Mastercard
                </button>
              </div>
            </div>
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
};
