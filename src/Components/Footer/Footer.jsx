import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__container'>
          {/* FOOTER LOGO */}
          <div className='footer__logo'>
            <Link to='/' className='header__logo'>
              Lshop
            </Link>
          </div>
          {/* FOOTER MAIN */}
          <ul className='footer__list'>
            <li className='footer__item'>
              Design by <a href='https://github.com/lamhoang1256'>Nguyen Hoang Lam</a>
            </li>
            <li className='footer__item'>Privacy Policy</li>
            <li className='footer__item'>Terms of Use</li>
          </ul>
          {/* FOOTER PAYMENT */}
          <div>
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/footer-payment.png`}
              alt=''
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
