import React from "react";
import "./breadcrumb.scss";

export const Breadcrumb = ({ page, path }) => {
  return (
    <div className='breadcrumb'>
      <div className='container'>
        <div className='breadcrumb__page'>{page}</div>
        <div className='breadcrumb__path'>
          <div className='text-gray'>Home</div>
          <div>
            <ion-icon name='chevron-forward-outline'></ion-icon>
          </div>
          {path}
        </div>
      </div>
    </div>
  );
};
