import React from "react";
import "./loading.scss";

export const Loading = () => {
  return (
    <div className='loading'>
      <img src={`${process.env.PUBLIC_URL}/assets/gif/loading.gif`} alt='' />
    </div>
  );
};
