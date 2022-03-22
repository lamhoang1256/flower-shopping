import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateAction } from "../../Redux/actions/userAction";
import "./profile.scss";

export const Profile = () => {
  const dispatch = useDispatch();
  const { loading, errorMessenger } = useSelector((state) => state.userReducer);
  // toggle UI list order history or edit profile
  const [isOrder, setIsOrder] = useState(true);
  // get user info from localStorage
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")) || null);
  const token = (userInfo && userInfo.token) || null;
  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // handle update user profile
  const handleUpdate = async (data) => {
    await dispatch(updateAction(data, token));
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
    // reset field input when update success
    reset({
      name: "",
      email: "",
      oldPassword: "",
      password: "",
    });
  };

  return (
    <div className='profile'>
      <div className='container'>
        <div className='profile__container'>
          {/* PROFILE - INFO */}
          <div className='profile__info'>
            <img
              className='profile__avatar'
              src='./assets/images/testimonial-1.png'
              alt='profile__avatar'
            />
            <h3 className='profile__name'>{userInfo && userInfo.name}</h3>
            <div className='profile__email'>
              <p>Email:</p>
              <h3>{userInfo && userInfo.email}</h3>
            </div>
            <button
              className={`profile__switch button ${isOrder ? "button__sky" : "button__primary"}`}
              onClick={() => {
                setIsOrder(!isOrder);
              }}
            >
              {isOrder ? "Edit Profile" : "Show History"}
            </button>
          </div>

          {isOrder ? (
            <div className='profile__order'>
              {/* PROFILE - ORDER */}
              <table>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr className='tr--fail'>
                    <td>1</td>
                    <td>Not Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  {/* test  */}
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Paid</td>
                    <td>17/03/2022</td>
                    <td>$231</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className='profile__change'>
              {/* PROFILE - FORM */}
              <form className='profile__form' onSubmit={handleSubmit(handleUpdate)}>
                <div className='profile__list'>
                  {/* INPUT UPDATE - NAME */}
                  <div className='profile__item'>
                    <h3>FULL NAME</h3>
                    <input
                      type='text'
                      className='profile__input'
                      name='name'
                      {...register("name")}
                    />
                    {errors.name?.type === "minLength" && (
                      <div className='ui__error'>Minimum full name is 6 characters</div>
                    )}
                    {errors.name?.type === "maxLength" && (
                      <div className='ui__error'>Maximum fullname is 40 characters </div>
                    )}
                  </div>
                  {/* INPUT UPDATE - EMAIL */}
                  <div className='profile__item'>
                    <h3>EMAIL</h3>
                    <input
                      type='text'
                      className='profile__input'
                      name='email'
                      {...register("email", {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        },
                      })}
                    />
                    {errors.email?.type === "pattern" && (
                      <div className='ui__error'>Email not invalid</div>
                    )}
                  </div>
                  {/* INPUT UPDATE - NEW PASSWORD */}
                  <div className='profile__item'>
                    <h3>NEW PASSWORD</h3>
                    <input
                      type='password'
                      className='profile__input'
                      name='password'
                      {...register("password", { maxLength: 14 })}
                    />
                    {errors.password?.type === "maxLength" && (
                      <div className='ui__error'>Maximum old password is 14 characters </div>
                    )}
                  </div>
                </div>
                {errorMessenger && <div className='ui__error'>Error update </div>}
                <button type='submit' className='profile__button button button__primary'>
                  UPDATE PROFILE
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
