import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginAction } from "../../Redux/actions/authAction";
import "./auth.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.loginReducer);
  const { errorMessenger } = userLogin;
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // handle login
  const handleLogin = (data) => {
    dispatch(loginAction(data));
  };

  return (
    <div className='login auth'>
      <div className='container'>
        <div className='login__container'>
          <form className='ui__form' onSubmit={handleSubmit(handleLogin)}>
            <h2 className='ui__heading'>LOGIN</h2>
            {/* INPUT - EMAIL */}
            <input
              type='text'
              placeholder='Enter email'
              name='email'
              className='ui__input'
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.email?.type === "required" && (
              <div className='ui__error'>Email is required</div>
            )}
            {errors.email?.type === "pattern" && <div className='ui__error'>Email not invalid</div>}
            {/* INPUT - PASSWORD */}
            <input
              type='password'
              placeholder='Enter password'
              name='password'
              className='ui__input'
              {...register("password", { required: true, minLength: 8, maxLength: 14 })}
            />
            {errors.password?.type === "required" && (
              <div className='ui__error'>Password is required</div>
            )}
            {errors.password?.type === "minLength" && (
              <div className='ui__error'>Minimum password is 8 characters </div>
            )}
            {errors.password?.type === "maxLength" && (
              <div className='ui__error'>Maximum password is 14 characters </div>
            )}
            <button type='submit' className='ui__submit button button__primary'>
              LOGIN
            </button>
            {errorMessenger && <div className='ui__error'> {errorMessenger} </div>}
            <Link to='/register' className='redirect'>
              Create Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
