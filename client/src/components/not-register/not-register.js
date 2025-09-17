import React from 'react';

import LoadImage from '../load-image';
import { withAuth } from '../hoc';
import {
  notRegisterImageUrl as imageUrl,
  notRegisterPreviewUrl as previewUrl,
} from '../../data';

import './not-register.scss';

const NotRegister = ({ onViewPopup }) => {
  return (
    <div className="not-register">
      <div className="container">
        <div className="not-register__wrap">
          <div className="not-register__image">
            <LoadImage imageUrl={imageUrl} previewUrl={previewUrl} blur={10} />
          </div>
          {/* <img src={'/images/login.svg'} className="not-register__image" /> */}
          <h2 className="not-register__title">Log in to your account!</h2>
          <span className="not-register__text">
            This way you can view your selected products on any device. It’s convenient!
          </span>
          <button
            className="btn_order not-register__btn"
            onClick={onViewPopup}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(NotRegister);