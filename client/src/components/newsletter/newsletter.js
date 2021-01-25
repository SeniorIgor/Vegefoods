import React, { Component } from 'react';

import './newsletter.scss';

// =========================================

//? при событии focus placeholder
//? отправка данных в store

// =========================================

export default class Newsletter extends Component {

	state = {
		label: '',
		error: false,
	}

	checkInputs = () => {
		const value = this.state.label;
		const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regExp.test(String(value).toLowerCase());
	}

	onSubmit = (e) => {
		e.preventDefault();

		if (!this.checkInputs()) {
			this.setState({
				error: true,
			});
		}

		//? при событии focus placeholder
		//? отправка данных в store
	}

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value.trim(),
			error: false,
		});
	}

	render() {
		const { error } = this.state;
		let inputClassNames = 'newsletter__field';

		if (error) {
			inputClassNames += ' error';
		}

		return (
			<div className="newsletter" >
				<div className="container">
					<div className="newsletter__wrapper">
						<div className="newsletter__column">
							<h2 className="newsletter__title">Подпишитесь на нашу рассылку</h2>
							<p className="newsletter__text">Получайте по электронной почте обновления о наших последних акциях и специальных предложениях</p>
						</div>
						<div className="newsletter__column">
							<form className="newsletter__form"
								onSubmit={this.onSubmit}>
								<div className="newsletter__field-wrapper">
									<input
										type="text"
										className={inputClassNames}
										onChange={this.onLabelChange}
										value={this.state.label}
										placeholder="Введите ваш Email" />
									<button className="newsletter__btn">
										Подписаться
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}