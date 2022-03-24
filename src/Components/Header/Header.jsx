import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/actions/authAction";
import { NavLink, Link } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  const dispatch = useDispatch();
  //change button sign in -> avatar if has been login
  const [isLogin, setIsLogin] = useState(true);
  const userInfo = localStorage.getItem("userInfo") || null;
  useEffect(() => {
    if (userInfo) {
      setIsLogin(false);
    }
  }, [userInfo]);
  //show count product in cart items
  const countProduct = useSelector((state) => state.cartReducer).cartItems.length;
  //toggle navbar menu
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  //handle logout
  const handleLogout = () => {
    dispatch(logoutAction);
    window.location.replace("/");
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__container'>
          {/* HEADER LOGO */}
          <Link to='/' className='header__logo'>
            Lshop
          </Link>
          {/* NAVBAR MENU */}
          <ul className={`navbar ${showNavbar ? "show" : ""}`}>
            <div className='header__toggle-close' onClick={handleShowNavbar}>
              <ion-icon name='close-outline'></ion-icon>
            </div>
            <li className='navbar__item'>
              <NavLink to='/' className='navbar__link'>
                Home
              </NavLink>
            </li>
            <li className='navbar__item'>
              <NavLink to='/product' className='navbar__link'>
                Product
              </NavLink>
            </li>
            <li className='navbar__item'>
              <NavLink to='/news' className='navbar__link'>
                News
              </NavLink>
            </li>
            <li className='navbar__item'>
              <NavLink to='/about-us' className='navbar__link'>
                About Us
              </NavLink>
            </li>
            <li className='navbar__item'>
              <NavLink to='/profile' className='navbar__link'>
                Profile
              </NavLink>
            </li>
          </ul>
          {/* HEADER ACTIONS */}
          <div className='header__actions'>
            <div className='header__search'>
              <ion-icon name='search-outline'></ion-icon>
            </div>
            <Link to='/cart' className='header__cart'>
              <ion-icon name='cart-outline'></ion-icon>
              <div className='header__cart-count'>{countProduct}</div>
            </Link>
            <div className='header__user'>
              {isLogin ? (
                <Link to='/login'>
                  <button className='header__sign-in button button__primary'>SIGN IN</button>
                </Link>
              ) : (
                <Link to='/profile'>
                  <div className='header__user-info'>
                    <img
                      className='header__user-avatar'
                      src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/testimonial-1.png`}
                    ></img>
                    <div className='header__user-logout' onClick={handleLogout}>
                      LOGOUT
                    </div>
                  </div>
                </Link>
              )}
            </div>
            <div className='header__toggle' onClick={handleShowNavbar}>
              <ion-icon name='menu-outline'></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
