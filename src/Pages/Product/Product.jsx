import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../../Components/Breadcrumb/Breadcrumb";
import { Loading } from "../../Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/actions/productAction";
import "./product.scss";

export const Product = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productReducer);
  const { loading, error, dataProducts } = productList;
  console.log(dataProducts);

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <div className='product'>
      {/* PRODUCT - BREADCRUMB */}
      <Breadcrumb page={"All Product"} path={"Product"}></Breadcrumb>
      <div className='container'>
        <div className='product__container'>
          {/* PRODUCT - MAIN */}
          <div className='product__main'>
            {loading ? (
              <Loading></Loading>
            ) : error ? (
              <h1>Err</h1>
            ) : (
              <div className='product__list'>
                {!loading &&
                  dataProducts.products &&
                  dataProducts.products.map((product) => {
                    {
                      console.log(product);
                    }
                    return (
                      <div className='product__item' key={product._id}>
                        <Link to={`/product/${product._id}`} className='product__thumb'>
                          <img src={`./assets/images/data/${product.image}`} alt='' />
                        </Link>
                        <div className='product__info'>
                          <Link to='/product/1'>
                            <h3 className='product__name'>{product.name}</h3>
                          </Link>
                          <div className='product__bottom'>
                            <div className='product__price'>${product.price}</div>
                            <button className='product__buy button button__primary'>
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
            {/* <div className='product__item'>
                <Link to='/product/1' className='product__thumb'>
                  <img src='./assets/images/img-1.jpg' alt='' />
                </Link>
                <div className='product__info'>
                  <Link to='/product/1'>
                    <h3 className='product__name'>Rose Flower</h3>
                  </Link>
                  <div className='product__bottom'>
                    <div className='product__price'>$12</div>
                    <button className='product__buy button button__primary'>Add to cart</button>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
