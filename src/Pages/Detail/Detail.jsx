import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailProduct } from "../../Redux/actions/detailAction";
import { Loading } from "../../Components/Loading/Loading";

import "./detail.scss";

export const Detail = () => {
  const params = useParams();
  const idDetailProduct = params.id;
  const dispatch = useDispatch();
  const productDetailState = useSelector((state) => state.detailReducer);
  const { loading, error, dataDetail } = productDetailState;
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
                  <select name='quantity' className='detail__quantity-select'>
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
              <button className='detail__add button button__sky'>Add to cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
