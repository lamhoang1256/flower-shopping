import React from "react";
import "./detail.scss";

export const Detail = () => {
  return (
    <div className='detail'>
      <div className='container'>
        <div className='detail__container'>
          <div className='detail__images'>
            <img src='../assets/images/img-2.jpg' alt='' />
          </div>
          <div className='detail__content'>
            <h3 className='detail__name'>Rose Flower</h3>
            <div className='detail__price'>$124</div>
            <div className='detail__desc'>
              <span>+ </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              cupiditate quaerat voluptates modi, quod repellendus tempore ea ad sequi quisquam
            </div>
            <div className='detail__status'>
              + Status: <span>In stock</span>
            </div>
            <div className='detail__reviews'>
              + Reviews: <span>4 reviews</span>
            </div>
            <div className='detail__quantity'>
              <span>+ Quantity: </span>
              <select name='quantity' className='detail__quantity-select'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </div>
            <button className='detail__add button button__sky'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
