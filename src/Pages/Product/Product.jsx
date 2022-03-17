import React from "react";
import "./product.scss";

export const Product = () => {
  return (
    <div className='product'>
      {/* PRODUCT - BREADCRUMB */}
      <div className='breadcrumb'>
        <div className='container'>
          <div className='breadcrumb__page'>All Product</div>
          <div className='breadcrumb__path'>
            <div className='text-gray'>Home</div>
            <div>
              <ion-icon name='chevron-forward-outline'></ion-icon>
            </div>
            Product
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='product__container'>
          {/* PRODUCT - MAIN */}
          <div className='product__main'>
            <div className='product__list'>
              <div className='product__item'>
                <div className='product__thumb'>
                  <img src='./assets/images/img-1.jpg' alt='' />
                </div>
                <div className='product__info'>
                  <h3 className='product__name'>Rose Flower</h3>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className='product__item'>
                <div className='product__thumb'>
                  <img src='./assets/images/img-1.jpg' alt='' />
                </div>
                <div className='product__info'>
                  <h3 className='product__name'>Rose Flower</h3>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className='product__item'>
                <div className='product__thumb'>
                  <img src='./assets/images/img-2.jpg' alt='' />
                </div>
                <div className='product__info'>
                  <h3 className='product__name'>Rose Flower</h3>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className='product__item'>
                <div className='product__thumb'>
                  <img src='./assets/images/img-3.jpg' alt='' />
                </div>
                <div className='product__info'>
                  <h3 className='product__name'>Rose Flower</h3>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className='product__item'>
                <div className='product__thumb'>
                  <img src='./assets/images/img-1.jpg' alt='' />
                </div>
                <div className='product__info'>
                  <h3 className='product__name'>Rose Flower</h3>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className='product__item'>
                <div className='product__thumb'>
                  <img src='./assets/images/img-2.jpg' alt='' />
                </div>
                <div className='product__info'>
                  <h3 className='product__name'>Rose Flower</h3>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className='product__item'>
                <div className='product__thumb'>
                  <img src='./assets/images/img-3.jpg' alt='' />
                </div>
                <div className='product__info'>
                  <h3 className='product__name'>Rose Flower</h3>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className='product__item'>
                <div className='product__thumb'>
                  <img src='./assets/images/img-1.jpg' alt='' />
                </div>
                <div className='product__info'>
                  <h3 className='product__name'>Rose Flower</h3>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className='product__item'>
                <div className='product__thumb'>
                  <img src='./assets/images/img-2.jpg' alt='' />
                </div>
                <div className='product__info'>
                  <h3 className='product__name'>Rose Flower</h3>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className='product__item'>
                <div className='product__thumb'>
                  <img src='./assets/images/img-1.jpg' alt='' />
                </div>
                <div className='product__info'>
                  <h3 className='product__name'>Rose Flower</h3>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className='product__item'>
                <div className='product__thumb'>
                  <img src='./assets/images/img-1.jpg' alt='' />
                </div>
                <div className='product__info'>
                  <h3 className='product__name'>Rose Flower</h3>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className='product__item'>
                <div className='product__thumb'>
                  <img src='./assets/images/img-1.jpg' alt='' />
                </div>
                <div className='product__info'>
                  <h3 className='product__name'>Rose Flower</h3>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
