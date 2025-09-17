import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import LoadImage from '../load-image';

import './slider.scss';

const slides = [
	{
		id: 1,
		title: "Fresh Fruits & Vegetables",
  	text: "Delivered farm-fresh and natural, straight to your door",
		imageUrl: '/images/bg_1.jpg',
		previewUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAMAAACejr5sAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGAUExURfDv9Ofm7u/v9+/v8u3s8fLx+O7t8vDv9fLx9u/v8/Lv9uvr8Je2AkBaAeOda+/u5/QAAeW8odYHAOfp8C84FAMZMM+UcCMXCA4xNeWwjO+ga2k1LFyIDfC5OneYA92memEMELkAAOnKuLoAAU0OL3gBAWkUL/4xLaKs0JuOl4WbzJWWsqCpxsTVkXSkMEstQpFlU8vcaZSwV7rCrQ0MEzcqNYJJA1yQPgAJITZaKy4iJ6VQIlV7BNyqiaxzU8rLw++kRDQRAYyMqJ2hrOvt36idTH6aJYCQM9WSM7zXdoOwNYqdMPCtHtSQCsJkhM3fOb5xDvrpwYkuEImiGdnRkrvQFdWEV6NtSkoRAcuLb9ebfSMAANLfh7uBf4qkyWd8b+IAAO/UzcalXXJoANwxG6N/c/CxjsUAAJJDDINROFA+M/qOelFEGM+ndL9UPtymnIlGE49UGPLQsOSfj/0OBhVFc//XZPB7buqSfNjRpY8YNMwcBu0eJAI3eLhJCWw6Q7/nfc0AAAAJcEhZcwAAAAEAAAABAE8lxNYAAAD+SURBVBjTHY7VcsMwFESvLdnylZyYwpw0UGZmZuamzMzMv16ns2+7e2YOIAJDSoUsc4VrTAUhJGCcM0IIRVnROEdaW0Ml4FxhjKBKkLk7n0h0Cwc4YxoHVIUwVDY8F/OMxpr+cUCCDUsez5Y+H50cG+kD5lIIRE8cnplmOjU7tTAeL5Xus3H5wE6flm1ur8VnpvsBXCekK9bVferiOFO0islwD5CSj9CN6+SddXLuXfUGAhGgxI0wHt5fbzKXRxuRcG99FCTJcaT9l5/0p/34tLc40FUX7ITyyuqh3dvCV65gm7n1oM/X0twKFVWDO89vv/nvj3w2G/KH2tr9HX+U0SWzDF9yIAAAAABJRU5ErkJggg==',
	},
	{
		id: 2,
		title: "100% Fresh & Natural",
  	text: "We deliver farm-fresh vegetables and fruits",
		imageUrl: '/images/bg_2.jpg',
		previewUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAMAAACejr5sAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAAAEAAAABAE8lxNYAAAJJUExURXQAAYkEAEkEKTsABv7iMREVDWgrAhEGCLQ6CP/hKfDFIfXOKicuOuy6Df7oOBUTFyIUGQYCA+CjTteTGe+4GPm2FDdtBfhiFGFhBpQgCfe3KmsBAoEiYKMaAsoDALYCBOedCLABALfFIPmWF+RJUcqmnPaNVmcCUfE3BNxpNP69ArZ3D/uGSOBBCucAAOdeDJpWAf+IQPcBAnGBkPndI1ZNAv/lJ+fOLv7pLAYIAWxXTnVGAturA+jTNoNrdElMU/F3BvzRNrIqfzdfFS4yRKd0Nzp3AScFBn9XJ7BzGfrZKqhnAdwDASRcAEtQSp0bjYsoB5sSQNZFhF9FG4d3AXZuCzZJAEKECVpjAv3XSf7Uaww0AMuRA4RKIVKfBmMNCbJLnVM2AJ17G6xaqJd6PSBPAKpbp6MrLt5Uay4GAI9PeG90d9JznaEqT7tMp81AUSAqAJptbloGBqIZDN5me8+Mt5kkNugXC8JSq08ANG1jFdYNAaVQft6RyS0ZJ/WrmL0DIj8gPLxAItJOlr5Bqednz7dsrPqx7v/KTM+x5fCmRv3LSpyAMnsVaOmBF+UxAPekdkRyAvNvA7hVRKY8rI8UVf0fDYRYF7hLGP+SXv5xSdVDAIIrHu6MPv64W3RYNdsCAPJYF8RGGOtPWv6ZTcU1AaB0AtSRMv+dIPKMH/7JXn2gF/hbNf2kBo1gAqw2AOHqaPl1ItOzCc1zCcyehteAU/GeJPvEI5cDAPhcRKlBNJQ0HMxASdaZoNhxQfG6PppjRaubTnEQF2SBKgQAAAEcSURBVBjTAREB7v4AD0RODD86NQsKDTxIihMBF5mYm6YAHw9rBwU+NzQJCQpLiI+XKJotLLEATHZyfhwCPQ4EBAQmKR2ioSykMS8AJWBqgGxSQjg2DouQnaUxJqkvryAAhoRueIWHUQY7FZKcrLm7KbCurSIAY3x9g3QkIxpAjp6ovr8tJcC0s7cAgXVoewYXFUEgK6ojuiTCH7gwGjAAECJiARlhU0lUkZ8ovBsuwb22q7IAB1UIgnpXRkNNFhijCDIyK7WnKioAEUdQf1YYXnBbZYyWoC4HIR4ZAAcAEEUSElgWZF8GCG8AlRwnA5MIOQUAExQLWlwhd3MAc10DjZQnAgAbOQwADUpZCRQeaWdxA20CeYlmTwEABTNgqU+ZVLRqJAAAAABJRU5ErkJggg==',
	}
];

export default class Slider extends Component {

  render() {
    SwiperCore.use([Autoplay]);

    const viewSlides = slides.map(({ id, title, text, imageUrl, previewUrl }) => {
      return (
        <SwiperSlide key={id} autoheight="true">
          <div className="slider__item">
            <div className="slider__bg">
              <LoadImage imageUrl={imageUrl} previewUrl={previewUrl} isContain={false} blur={10} />
              {/* <LoadBgImage imageUrl={imageUrl} previewUrl={previewUrl} /> */}
            </div>
            <div className="container">
              <div className="slider__content">
                <h1 className="slider__title">{title}</h1>
                <p className="slider__text">{text}</p>
                <Link to='/catalog/all/page/1' className="btn_order slider__btn">Learn More</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    })

    return (
      <div className="slider" >
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          preloadImages={true}
          loop={true}
          autoHeight={true}
          autoplay={{ delay: 7000 }}
          grabCursor={true}
        >
          {viewSlides}
        </Swiper>
      </div >
    );
  }
}