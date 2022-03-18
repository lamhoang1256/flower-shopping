import React from "react";
import { Link } from "react-router-dom";
import "./auth.scss";

export const Register = () => {
  return (
    <div className='register auth'>
      <div className='container'>
        <div className='register__container'>
          <form className='ui__form'>
            <h2 className='ui__heading'>REGISTER</h2>
            <input type='text' placeholder='Enter username' className='ui__input' />
            <input type='email' placeholder='Enter email' className='ui__input' />
            <input type='password' placeholder='Enter password' className='ui__input' />
            <button type='submit' className='ui__submit button button__primary'>
              REGISTER
            </button>
            <Link to='/login' className='redirect'>
              I Have Account Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
