import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerAction } from "../../Redux/actions/authAction";
import "./auth.scss";

export const Register = () => {
  const dispatch = useDispatch();
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // handle register
  const handleRegister = (data) => {
    dispatch(registerAction(data));
  };

  return (
    <div className='register auth'>
      <div className='container'>
        <div className='register__container'>
          <form className='ui__form' onSubmit={handleSubmit(handleRegister)}>
            <h2 className='ui__heading'>REGISTER</h2>
            {/* INPUT - USERNAME */}
            <input
              type='text'
              placeholder='Enter full name'
              name='name'
              className='ui__input'
              {...register("name", { required: true, minLength: 6, maxLength: 40 })}
            />
            {errors.name?.type === "minLength" && (
              <div className='ui__error'>Minimum full name is 6 characters</div>
            )}
            {errors.name?.type === "required" && (
              <div className='ui__error'>Full name is required</div>
            )}
            {errors.name?.type === "maxLength" && (
              <div className='ui__error'>Maximum fullname is 40 characters </div>
            )}
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
            {/* FORM - BUTTON */}
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
