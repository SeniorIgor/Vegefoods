import React from 'react';
import { Link } from 'react-router-dom';

import LoadImage from '../load-image';
import {
  errorIndicatorImageUrl as imageUrl,
  errorIndicatorPreviewUrl as previewUrl,
} from '../../data';

import './error-indicator.scss';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div className="container">
        <div className="error-indicator__wrap">
          <div className="error-indicator__image">
            <LoadImage imageUrl={imageUrl} previewUrl={previewUrl} blur={10} />
          </div>
          {/* <img src={'/images/not-found.svg'} className="error-indicator__image" /> */}
          <h2 className="error-indicator__title">404</h2>
          <h2 className="error-indicator__title error-indicator__title_min">
            Page not found!
          </h2>
          <span className="error-indicator__text">Why are you wandering here?</span>
          <span className="error-indicator__text">Your cart isn’t filled yet.</span>
          <Link
            to="/catalog/all/page/1"
            className="btn_order empty-favorites__btn"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorIndicator;