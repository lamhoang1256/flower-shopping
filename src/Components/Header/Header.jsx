import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  //toggle navbar menu
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
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
              <div className='header__cart-count'>2</div>
            </Link>
            <div className='header__user'>
              <button className='header__sign-in button button__primary'>SIGN IN</button>
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
