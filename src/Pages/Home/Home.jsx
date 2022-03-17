import React from "react";
import "./home.scss";

export const Home = () => {
  return (
    <div className='home'>
      <section className='home__header'>
        <div className='container'>
          <div className='home__content'>
            <h1 className='home__heading'>
              <span className='text__pink'>Make</span> Your Comfort Is Our
              <span className='text__pink'> Happiness</span>
            </h1>
            <p className='home__desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veritatis ad
              blanditiis molestias sunt aspernatur.
            </p>
            <button className='home__button button button__primary'>Shop Now</button>
          </div>
        </div>
      </section>
      {/* HOME - ABOUT */}
      <section className='about'>
        <div className='container'>
          <h2 className='about__heading text-heading'>About Us</h2>
          <div className='about__container'>
            <div className='about__video'>
              <video src='./assets/videos/about-video.mp4' loop autoPlay muted></video>
              <h3 className='about__video-text'>Best Flower Sellers</h3>
            </div>
            <div className='about__content'>
              <h3 className='about__title text-title'>Why Choose Us?</h3>
              <p className='about__desc text-desc'>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Rem Cumque Sit Nemo
                Pariatur Corporis Perspiciatis Aspernatur A Ullam Repudiandae Autem Asperiores
                Quibusdam Omnis Commodi Alias Repellat Illum, Unde Optio Temporibus.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* HOME - PAYMENT */}
      <section className='payment'>
        <div className='container'>
          <div className='payment__container'>
            <div className='payment__list'>
              <div className='payment__item'>
                <div className='payment__icon'>
                  <img src='./assets/images/payment-1.png' alt='' />
                </div>
                <div className='payment__info'>
                  <h3 className='payment__title'>Free Shipping</h3>
                  <p className='payment__desc'>Free shipping on all order</p>
                </div>
              </div>
              <div className='payment__item'>
                <div className='payment__icon'>
                  <img src='./assets/images/payment-2.png' alt='' />
                </div>
                <div className='payment__info'>
                  <h3 className='payment__title'>Support 24/7</h3>
                  <p className='payment__desc'>Customer Support</p>
                </div>
              </div>
              <div className='payment__item'>
                <div className='payment__icon'>
                  <img src='./assets/images/payment-3.png' alt='' />
                </div>
                <div className='payment__info'>
                  <h3 className='payment__title'>Money Return</h3>
                  <p className='payment__desc'>Money back guarantee</p>
                </div>
              </div>
              <div className='payment__item'>
                <div className='payment__icon'>
                  <img src='./assets/images/payment-4.png' alt='' />
                </div>
                <div className='payment__info'>
                  <h3 className='payment__title'>Order Discount</h3>
                  <p className='payment__desc'>For you best price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HOME - SUBSCRIBE */}
      <section className='subscribe'>
        <div className='container'>
          <div className='subscribe__container'>
            <div className='subscribe__content'>
              <div className='subscribe__slogan'>You can't hide form us</div>
              <h2 className='subscribe__title'>
                Subscribe now to get our latest & greatest updates
              </h2>
              <div className='subscribe__form'>
                <input type='text' className='subscribe__input' placeholder='Enter your email' />
                <button className='subscribe__button'>SUBSCRIBE</button>
              </div>
            </div>
            <div className='subscribe__image'>
              <img src='./assets/images/subscribe.png' alt='' />
            </div>
          </div>
        </div>
      </section>
      {/* HOME - TESTIMONIAL */}
      <section className='testimonial'>
        <div className='container'>
          <h2 className='testimonial__heading text-heading'>What our customers say</h2>
          <div className='testimonial__container'>
            <div className='testimonial__list'>
              <div className='testimonial__item'>
                <div className='testimonial__header'>
                  <div className='testimonial__avatar'>
                    <img src='./assets/images/testimonial-1.png' alt='' />
                  </div>
                  <div className='testimonial__info'>
                    <h3 className='testimonial__name'>Jeffery Rosario</h3>
                    <p className='testimonial__label'>Happy Customer</p>
                  </div>
                </div>
                <div className='testimonial__desc'>
                  "Thank you ... She received the flowers and she loves them!"
                </div>
              </div>
              <div className='testimonial__item'>
                <div className='testimonial__header'>
                  <div className='testimonial__avatar'>
                    <img src='./assets/images/testimonial-2.png' alt='' />
                  </div>
                  <div className='testimonial__info'>
                    <h3 className='testimonial__name'>Ava Lyon</h3>
                    <p className='testimonial__label'>Loyal customer</p>
                  </div>
                </div>
                <div className='testimonial__desc'>
                  "The flowers came in today. I received a phone-call from my mother. She was so
                  happy she cried. Thank you so much for your quality service. I will be purchasing
                  from you from now on :)"
                </div>
              </div>
              <div className='testimonial__item'>
                <div className='testimonial__header'>
                  <div className='testimonial__avatar'>
                    <img src='./assets/images/testimonial-3.png' alt='' />
                  </div>
                  <div className='testimonial__info'>
                    <h3 className='testimonial__name'>Allan Dickson</h3>
                    <p className='testimonial__label'>Best Customer</p>
                  </div>
                </div>
                <div className='testimonial__desc'>
                  "My sister received the order I sent and I have one word for you... grrrrreat!!! I
                  will tell everyone I know to use your site. Thank-You soooo much."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
