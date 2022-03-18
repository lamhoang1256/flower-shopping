import React from "react";
import "./order.scss";

export const Order = () => {
  return (
    <div className='order'>
      <div className='container'>
        <div className='order__container'>
          {/* ORDER - HEADER */}
          <div className='order__header'>
            {/* ORDER - CUSTOMER */}
            <div className='order__customer'>
              <div className='order__content'>
                <h3>Info Customer</h3>
                <p>John Hego</p>
                <p>JohnHego@gmail.com</p>
              </div>
            </div>
            {/* ORDER - INFO */}
            <div className='order__info'>
              <div className='order__content'>
                <h3>Order info</h3>
                <p>Shipping: Viet Nam</p>
                <p>Pay method: Paypal</p>
              </div>
            </div>
            {/* ORDER - DELIVER */}
            <div className='order__deliver'>
              <div className='order__content'>
                <h3>Deliver to</h3>
                <div>Address: số 238, phố 12, Đống Đa, Hà Nội</div>
              </div>
            </div>
          </div>
          {/* ORDER - MAIN */}
          <div className='order__main'>
            {/* ORDER - ALL PRODUCT BUY (CART) */}
            <div className='order__cart'>
              <div className='order__list'>
                <div className='order__item'>
                  <div>
                    <img src='./assets/images/img-1.jpg' alt='' />
                  </div>
                  <div>
                    <h3>Flower Rose</h3>
                  </div>
                  <div>Quantity: 4</div>
                  <div>Subtotal: $124</div>
                </div>
                <div className='order__item'>
                  <div>
                    <img src='./assets/images/img-1.jpg' alt='' />
                  </div>
                  <div>
                    <h3>Flower Rose</h3>
                  </div>
                  <div>Quantity: 4</div>
                  <div>Subtotal: $124</div>
                </div>
                <div className='order__item'>
                  <div>
                    <img src='./assets/images/img-1.jpg' alt='' />
                  </div>
                  <div>
                    <h3>Flower Rose</h3>
                  </div>
                  <div>Quantity: 4</div>
                  <div>Subtotal: $124</div>
                </div>
              </div>
            </div>
            {/* ORDER - PAYMENT */}
            <div className='order__payment'>
              <table>
                <tbody>
                  <tr>
                    <td>Products</td>
                    <td>$234</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>$341</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td>$31</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>$567</td>
                  </tr>
                </tbody>
              </table>
              <button className='order__button button button__sky'>Mastercard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
