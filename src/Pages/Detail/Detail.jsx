import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailProduct } from "../../Redux/actions/detailAction";
import { Loading } from "../../Components/Loading/Loading";

import "./detail.scss";
import { cartAction } from "../../Redux/actions/cartAction";

export const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const idDetailProduct = params.id;
  const [count, setCount] = useState(1);
  // get data
  const productDetailState = useSelector((state) => state.detailReducer);
  const { loading, error, dataDetail } = productDetailState;
  // handle add to Cart
  const handleAddToCart = (product) => {
    dispatch(cartAction(product));
    navigate("/cart");
  };
  useEffect(() => {
    dispatch(detailProduct(idDetailProduct));
  }, [dispatch, params]);

  return (
    <div className='detail'>
      <div className='container'>
        {loading ? (
          <Loading></Loading>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          <div className='detail__container'>
            <div className='detail__images'>
              <img
                src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/data/${dataDetail.image}`}
                alt={dataDetail.image}
              />
            </div>
            <div className='detail__content'>
              <h3 className='detail__name'>{dataDetail.name}</h3>
              <div className='detail__price'>${dataDetail.price}</div>
              <div className='detail__desc'>
                <span>+ </span>
                {dataDetail.description}
              </div>
              <div className='detail__status'>
                + Status: <span>{dataDetail.countInStock > 0 ? "In stock" : "Out stock"}</span>
              </div>
              <div className='detail__reviews'>
                + Reviews: <span>{dataDetail.numReviews} reviews</span>
              </div>
              {dataDetail.countInStock > 0 && (
                <div className='detail__quantity'>
                  <span>+ Quantity: </span>
                  <select
                    name='quantity'
                    className='detail__quantity-select'
                    onChange={(e) => {
                      setCount(Number(e.target.value));
                    }}
                  >
                    {[...Array(dataDetail.countInStock).keys()].map((x, index) => {
                      return (
                        <option key={index} value={x + 1}>
                          {x + 1}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )}
              {dataDetail.countInStock > 0 ? (
                <button
                  className='detail__add button button__sky'
                  onClick={() => handleAddToCart({ ...dataDetail, count })}
                >
                  Add to cart
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
