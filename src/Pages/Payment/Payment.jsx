import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payment.scss";

export const Payment = () => {
  const [isPaypal, setIsPaypal] = useState(false);
  const navigate = useNavigate();
  const handleSetPayment = () => {
    if (isPaypal) {
      navigate("/order");
    }
  };
  return (
    <div className='payment'>
      <div className='container'>
        <div className='payment__container'>
          <div className='payment__box'>
            <h2>SELECT PAYMENT METHOD</h2>
            <div className='payment__radio'>
              <input
                className='payment__input'
                type='radio'
                onChange={() => {
                  setIsPaypal(!isPaypal);
                }}
              />
              <label className='payment__label'>PayPal or Credit Card</label>
            </div>
            <button className='payment__button button button__primary' onClick={handleSetPayment}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
