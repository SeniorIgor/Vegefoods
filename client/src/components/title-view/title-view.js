import React from 'react';

// import LoadBgImage from '../load-bg-image';
import LoadImage from '../load-image';

import './title-view.scss';

const data = {
	id: 1,
	title: "Fresh Fruits & Vegetables",
  text: "Delivered farm-fresh and natural, straight to your door",
	// imageUrl: '/images/design-min.jpg',
	// previewUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAMAAAAYGszCAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADbUExURe/w7/f49+Pj4evr6/X19fHw8e3t7PT08/Ly8vb29+7u7ufn5u3u6eDg3dra18/PydXVzdra2ujl0rKyr+vq6b/Av9bW0+3s3+fn4ebcyc/Kwr+4s+Xj27ayrpeXlezmxvDq1auqou/jvlNTUPPUa+7Vi9/WzcyFf7acrNzAt+CxnuPgvdPMe/DMuvZyTWhBSd3VpM/LsqhtesjDm3FxbszKpOzMtcvEvuHCpoltTmNgW7VhUN/LmMCimLOkq86/rMWXiO7EUt/OvKN0lIxKR56dm+Dd2MO0re6Kb+WNKU8AAAAJcEhZcwAAAAEAAAABAE8lxNYAAADgSURBVBjTJczXloQgEEXRKwqogBGzdu7pMDnnHP//iwaW5632qipE4NxzHMfjTsF8CqZJBAKeCoNMBR7nAIvTGC71uRcETmCNAm4+KRCC2nvPEKcUIdNFCQb43BZw89EiSaEBOqpvkTFhMaSg1IBpXFQRhBsuZhgLXdHcEFWC6MV6NTtGNa3Atp8fd9dxiSvSNNP6RB4eZS572T693w8JlsnluThVMjtLhI5+16vXdoko6dqLTldZv9npv6+D3dvzA+J8mJNaZn0ttNzvk5/N4y3aSW4mOSdS5kp9993Qxv9jNBMDIs948QAAAABJRU5ErkJggg==',
	imageUrl: '/images/bg_1.jpg',
	previewUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAMAAACejr5sAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGAUExURfDv9Ofm7u/v9+/v8u3s8fLx+O7t8vDv9fLx9u/v8/Lv9uvr8Je2AkBaAeOda+/u5/QAAeW8odYHAOfp8C84FAMZMM+UcCMXCA4xNeWwjO+ga2k1LFyIDfC5OneYA92memEMELkAAOnKuLoAAU0OL3gBAWkUL/4xLaKs0JuOl4WbzJWWsqCpxsTVkXSkMEstQpFlU8vcaZSwV7rCrQ0MEzcqNYJJA1yQPgAJITZaKy4iJ6VQIlV7BNyqiaxzU8rLw++kRDQRAYyMqJ2hrOvt36idTH6aJYCQM9WSM7zXdoOwNYqdMPCtHtSQCsJkhM3fOb5xDvrpwYkuEImiGdnRkrvQFdWEV6NtSkoRAcuLb9ebfSMAANLfh7uBf4qkyWd8b+IAAO/UzcalXXJoANwxG6N/c/CxjsUAAJJDDINROFA+M/qOelFEGM+ndL9UPtymnIlGE49UGPLQsOSfj/0OBhVFc//XZPB7buqSfNjRpY8YNMwcBu0eJAI3eLhJCWw6Q7/nfc0AAAAJcEhZcwAAAAEAAAABAE8lxNYAAAD+SURBVBjTHY7VcsMwFESvLdnylZyYwpw0UGZmZuamzMzMv16ns2+7e2YOIAJDSoUsc4VrTAUhJGCcM0IIRVnROEdaW0Ml4FxhjKBKkLk7n0h0Cwc4YxoHVIUwVDY8F/OMxpr+cUCCDUsez5Y+H50cG+kD5lIIRE8cnplmOjU7tTAeL5Xus3H5wE6flm1ur8VnpvsBXCekK9bVferiOFO0islwD5CSj9CN6+SddXLuXfUGAhGgxI0wHt5fbzKXRxuRcG99FCTJcaT9l5/0p/34tLc40FUX7ITyyuqh3dvCV65gm7n1oM/X0twKFVWDO89vv/nvj3w2G/KH2tr9HX+U0SWzDF9yIAAAAABJRU5ErkJggg==',
};

const TitleView = ({ title, text }) => {

	return (
		<div className="title-view">
			<div className="title-view__bg">
				<LoadImage imageUrl={data.imageUrl} previewUrl={data.previewUrl} isContain={false} blur={10} />
				{/* <LoadBgImage imageUrl={data.imageUrl} previewUrl={data.previewUrl} /> */}
			</div>
			<div className="container">
				<div className="title-view__wrap">
					{/* <p className="title-view__text">{text}</p> */}
					<h2 className="title-view__title">{title}</h2>
				</div>
			</div>
		</div>
	);
}

export default TitleView;