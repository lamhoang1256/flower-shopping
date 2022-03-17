import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../../Components/Breadcrumb/Breadcrumb";
import "./cart.scss";

export const Cart = () => {
  return (
    <div className='cart'>
      {/* CART - BREADCRUMB */}
      <Breadcrumb page={"Cart"} path={"Cart"}></Breadcrumb>
      {/* CART - MAIN */}
      <div className='container'>
        <div className='cart__container'>
          <div className='cart__total'>Total Cart Products(4)</div>
          {/* CART - LIST */}
          <div className='cart__list'>
            <div className='cart__item'>
              <div className='cart__remove'>
                <ion-icon name='close'></ion-icon>
              </div>
              <div className='cart__image'>
                <img src='./assets/images/img-1.jpg' alt='' />
              </div>
              <div className='cart__name'>
                <p className='cart__label'>Name product</p>
                <p>Rose Flower</p>
              </div>
              <div className='cart__price'>
                <p className='cart__label'>Price:</p>
                <p>$33</p>
              </div>
              <div className='cart__quantity'>
                <p className='cart__label'>Quantity:</p>
                <select name='quantity' className='detail__quantity-select'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                </select>
              </div>
              <div className='cart__subtotal'>
                <p className='cart__label'>Subtotal:</p>
                <h4>$124</h4>
              </div>
            </div>
            <div className='cart__item'>
              <div className='cart__remove'>
                <ion-icon name='close'></ion-icon>
              </div>
              <div className='cart__image'>
                <img src='./assets/images/img-1.jpg' alt='' />
              </div>
              <div className='cart__name'>
                <p className='cart__label'>Name product</p>
                <p>Rose Flower</p>
              </div>
              <div className='cart__price'>
                <p className='cart__label'>Price:</p>
                <p>$33</p>
              </div>
              <div className='cart__quantity'>
                <p className='cart__label'>Quantity:</p>
                <select name='quantity' className='detail__quantity-select'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                </select>
              </div>
              <div className='cart__subtotal'>
                <p className='cart__label'>Subtotal:</p>
                <h4>$124</h4>
              </div>
            </div>
            <div className='cart__item'>
              <div className='cart__remove'>
                <ion-icon name='close'></ion-icon>
              </div>
              <div className='cart__image'>
                <img src='./assets/images/img-1.jpg' alt='' />
              </div>
              <div className='cart__name'>
                <p className='cart__label'>Name product</p>
                <p>Rose Flower</p>
              </div>
              <div className='cart__price'>
                <p className='cart__label'>Price:</p>
                <p>$33</p>
              </div>
              <div className='cart__quantity'>
                <p className='cart__label'>Quantity:</p>
                <select name='quantity' className='detail__quantity-select'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                </select>
              </div>
              <div className='cart__subtotal'>
                <p className='cart__label'>Subtotal:</p>
                <h4>$124</h4>
              </div>
            </div>
          </div>
          {/* CART - TOTAL */}
          <div className='cart__total'>
            <p>TOTAL :</p>
            <h3>$1234</h3>
          </div>
          {/* CART - ACTION */}
          <div className='cart__action'>
            <Link to='/product'>
              <button className='button button__sky'>Shop more</button>
            </Link>
            <Link to='/checkout'>
              <button className='button button__primary'>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
