import React from "react";
import { Link } from "react-router-dom";
import "./auth.scss";

export const Login = () => {
  return (
    <div className='login auth'>
      <div className='container'>
        <div className='login__container'>
          <form className='ui__form'>
            <h2 className='ui__heading'>LOGIN</h2>
            <input type='email' placeholder='Enter email' className='ui__input' />
            <input type='password' placeholder='Enter password' className='ui__input' />
            <button type='submit' className='ui__submit button button__primary'>
              LOGIN
            </button>
            <Link to='/register' className='redirect'>
              Create Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
