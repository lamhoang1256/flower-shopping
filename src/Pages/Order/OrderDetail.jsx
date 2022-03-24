import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderDetailAction } from "../../Redux/actions/orderAction";
import "./order.scss";

export const OrderDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { idOrder } = params;
  const { orderDetail, loading, success } = useSelector((state) => state.orderDetailReducer);
  console.log(orderDetail);
  useEffect(() => {
    dispatch(orderDetailAction(idOrder));
  }, [dispatch, idOrder]);
  return (
    <div className='order'>
      <div className='container'>
        {loading
          ? "Loading"
          : success && (
              <div className='order__container'>
                {/* ORDER - HEADER */}
                <div className='order__header'>
                  {/* ORDER - CUSTOMER */}
                  <div className='order__customer'>
                    <div className='order__content'>
                      <h3>Info Customer</h3>
                      <p>{orderDetail.user.name}</p>
                      <p>{orderDetail.user.email}</p>
                    </div>
                  </div>
                  {/* ORDER - INFO */}
                  <div className='order__info'>
                    <div className='order__content'>
                      <h3>Order info</h3>
                      <p>Shipping: Viet Nam</p>
                      <p>Time order: {new Date(orderDetail.createdAt).toUTCString()}</p>
                    </div>
                  </div>
                  {/* ORDER - DELIVER */}
                  <div className='order__deliver'>
                    <div className='order__content'>
                      <h3>Deliver to</h3>
                      <div>
                        Address:
                        {` ${orderDetail.shippingAddress.address}, ${orderDetail.shippingAddress.city}, ${orderDetail.shippingAddress.country}`}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ORDER - MAIN */}
                <div className='order__main'>
                  {/* ORDER - ALL PRODUCT BUY (CART) */}
                  <div className='order__cart'>
                    <div className='order__list'>
                      {orderDetail.orderItems.map((item) => (
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
                          <td>${orderDetail.totalPrice - orderDetail.taxPrice - 9.99}</td>
                        </tr>
                        <tr>
                          <td>Shipping</td>
                          <td>$9.99 (Fixed)</td>
                        </tr>
                        <tr>
                          <td>Tax (10%)</td>
                          <td>${orderDetail.taxPrice}</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>${orderDetail.totalPrice}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
      </div>
    </div>
  );
};
