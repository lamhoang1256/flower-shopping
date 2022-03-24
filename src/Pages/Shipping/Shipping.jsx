import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { shippingAction } from "../../Redux/actions/userAction";
import "./shipping.scss";

export const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // handle shipping
  const handleShipping = (data) => {
    dispatch(shippingAction(data));
    navigate("/order");
  };

  return (
    <div className='shipping'>
      <div className='container'>
        <div className='shipping__container'>
          <form className='ui__form' onSubmit={handleSubmit(handleShipping)}>
            <h2 className='ui__heading'>DELIVERY ADDRESS</h2>
            {/* FROM - ADDRESS */}
            <input
              type='text'
              placeholder='Enter address'
              className='ui__input'
              {...register("address", { required: true })}
            />
            {errors.address?.type === "required" && (
              <div className='ui__error'>Address is required</div>
            )}
            {/* FORM CITY */}
            <input
              type='text'
              placeholder='Enter city'
              className='ui__input'
              {...register("city", { required: true })}
            />
            {errors.city?.type === "required" && <div className='ui__error'>City is required</div>}
            {/* FORM POSTAL CODE */}
            <input
              type='text'
              placeholder='Enter postal code'
              className='ui__input'
              {...register("postalCode", { required: true })}
            />
            {errors.postalCode?.type === "required" && (
              <div className='ui__error'>Postal code is required</div>
            )}
            {/* FORM COUNTRY */}
            <input
              type='text'
              placeholder='Enter country'
              className='ui__input'
              {...register("country", { required: true })}
            />
            {errors.country?.type === "required" && (
              <div className='ui__error'>Country is required</div>
            )}
            <button type='submit' className='ui__submit button button__primary'>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
