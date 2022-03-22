import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "../../Components/Breadcrumb/Breadcrumb";
import { Loading } from "../../Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/actions/productAction";
import "./product.scss";
import { cartAction } from "../../Redux/actions/cartAction";

export const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productReducer);
  const { loading, error, dataProducts } = productList;
  // handle add product to cart
  const handleAddToCart = (product) => {
    dispatch(cartAction(product));
    navigate("/cart");
  };

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
                    return (
                      <div className='product__item' key={product._id}>
                        <Link to={`/product/${product._id}`} className='product__thumb'>
                          <img src={`./assets/images/data/${product.image}`} alt={product.name} />
                        </Link>
                        <div className='product__info'>
                          <Link to='/product/1'>
                            <h3 className='product__name'>{product.name}</h3>
                          </Link>
                          <div className='product__bottom'>
                            <div className='product__price'>${product.price}</div>
                            {product.countInStock > 0 ? (
                              <button
                                className='product__buy button button__primary'
                                onClick={() =>
                                  handleAddToCart(
                                    { ...product, count: 1 }
                                    // _id: product._id,
                                    // name: product.name,
                                    // price: product.price,
                                    // count: 1,
                                    // countInStock: product.countInStock,
                                  )
                                }
                              >
                                Add to cart
                              </button>
                            ) : (
                              "Out stock"
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
