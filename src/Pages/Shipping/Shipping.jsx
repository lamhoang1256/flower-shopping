import React from "react";
import "./shipping.scss";

export const Shipping = () => {
  return (
    <div className='shipping'>
      <div className='container'>
        <div className='shipping__container'>
          <form className='ui__form'>
            <h2 className='ui__heading'>DELIVERY ADDRESS</h2>
            <input type='text' placeholder='Enter address' className='ui__input' />
            <input type='text' placeholder='Enter city' className='ui__input' />
            <input type='text' placeholder='Enter postal code' className='ui__input' />
            <input type='text' placeholder='Enter country' className='ui__input' />
            <button type='submit' className='ui__submit button button__primary'>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
