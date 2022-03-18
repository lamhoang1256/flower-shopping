import React from "react";
import "./shipping.scss";

export const Shipping = () => {
  return (
    <div className='shipping'>
      <div className='container'>
        <div className='shipping__container'>
          <form className='shipping__form'>
            <h2 className='shipping__heading'>DELIVERY ADDRESS</h2>
            <input type='text' placeholder='Enter address' className='shipping__input' />
            <input type='text' placeholder='Enter city' className='shipping__input' />
            <input type='text' placeholder='Enter postal code' className='shipping__input' />
            <input type='text' placeholder='Enter country' className='shipping__input' />
            <button type='submit' className='shipping__submit button button__primary'>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
