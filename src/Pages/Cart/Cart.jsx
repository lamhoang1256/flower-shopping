import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../../Components/Breadcrumb/Breadcrumb";
import { removeCartAction } from "../../Redux/actions/cartAction";
import "./cart.scss";

export const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  // calculation total price all product
  let total;
  if (cartItems) {
    total = cartItems.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.price * currentValue.count;
    }, 0);
  }
  // handle cart remove product
  const handleCartRemove = (idProduct) => {
    dispatch(removeCartAction(idProduct));
  };
  return (
    <div className='cart'>
      {/* CART - BREADCRUMB */}
      <Breadcrumb page={"Cart"} path={"Cart"}></Breadcrumb>
      {/* CART - MAIN */}
      <div className='container'>
        <div className='cart__container'>
          <div className='cart__total'>Total Cart Products({cartItems.length})</div>
          {/* CART - LIST */}
          <div className='cart__list'>
            {cartItems.length !== 0
              ? cartItems.map((item) => (
                  <div className='cart__item' key={item._id}>
                    <div className='cart__remove' onClick={() => handleCartRemove(item._id)}>
                      <ion-icon name='close'></ion-icon>
                    </div>
                    <Link to={`/product/${item._id}`} className='cart__image'>
                      <img
                        src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/data/${item.image}`}
                        alt=''
                      />
                    </Link>
                    <div className='cart__name'>
                      <p className='cart__label'>Name product</p>
                      <Link to={`/product/${item._id}`} className='cart__name-title'>
                        {item.name}
                      </Link>
                    </div>
                    <div className='cart__price'>
                      <p className='cart__label'>Price:</p>
                      <p>{item.price}</p>
                    </div>
                    <div className='cart__quantity'>
                      <p className='cart__label'>Quantity:</p>
                      {/* <select name='quantity' className='detail__quantity-select'>
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option
                            value={x + 1}
                            defaultValue={item.count === x ? true : false}
                            key={x}
                          >
                            {x + 1}
                          </option>
                        ))}
                      </select> */}
                      <p>{item.count}</p>
                    </div>
                    <div className='cart__subtotal'>
                      <p className='cart__label'>Subtotal:</p>
                      <h4>${`${item.price * item.count}`}</h4>
                    </div>
                  </div>
                ))
              : "Chưa có sản phẩm "}
          </div>
          {/* CART - TOTAL */}
          <div className='cart__total'>
            <p>TOTAL :</p>
            <h3>{total ? `$${total}` : 0}</h3>
          </div>
          {/* CART - ACTION */}
          <div className='cart__action'>
            <Link to='/product'>
              <button className='button button__sky'>Shop more</button>
            </Link>
            <Link to='/shipping'>
              <button className='button button__primary'>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
