import React, { useState } from "react";
import "./profile.scss";

export const Profile = () => {
  const [isOrder, setIsOrder] = useState(true);

  return (
    <div className='profile'>
      <div className='container'>
        <div className='profile__container'>
          {/* PROFILE - INFO */}
          <div className='profile__info'>
            <img className='profile__avatar' src='./assets/images/testimonial-1.png' alt='' />
            <h3 className='profile__name'>Huge</h3>
            <div className='profile__email'>
              <p>Email:</p>
              <h3>huge@gmail.com</h3>
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
              <form className='profile__form'>
                <div className='profile__list'>
                  <div className='profile__item'>
                    <h3>USERNAME</h3>
                    <input type='text' className='profile__input' />
                  </div>
                  <div className='profile__item'>
                    <h3>EMAIL</h3>
                    <input type='text' className='profile__input' />
                  </div>
                  <div className='profile__item'>
                    <h3>NEW PASSWORD</h3>
                    <input type='text' className='profile__input' />
                  </div>
                  <div className='profile__item'>
                    <h3>CONFIRM PASSWORD</h3>
                    <input type='text' className='profile__input' />
                  </div>
                </div>
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
