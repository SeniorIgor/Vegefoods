import React from 'react';

import FormField from '../form-field';
import Message from '../message';
import DropdownMenu from '../dropdown-menu';
import { FieldPhoneContainer, OrderDetailsContainer } from '../../containers';
import { getDeliveryDates, getDeliveryTime } from '../../utils';
import { orderingFields as fields } from '../../data';

import './ordering.scss';

const Ordering = (props) => {
	const { date, time, updateValue, errorData, earlyDate } = props;

	const dateList = getDeliveryDates(earlyDate);
	const timeList = getDeliveryTime();

	const fieldsView = fields.map((item) => {
		const { id, fieldName } = item;
		const value = props[fieldName];
		const error = props.errors[fieldName];

		return (
			<div key={id} className="ordering__field-wrap">
				{
					(fieldName === 'phone') ? <FieldPhoneContainer fieldData={item} value={value} error={error}
						updateValue={(value) => updateValue('phone', value)} />
						: <FormField {...item} value={value} error={error}
							onChange={(e) => updateValue(e.target.name, e.target.value)} />
				}
			</div>
		);
	});

	const messageView = (errorData) ? <Message message={errorData.message} isError={true} /> : null;

	return (
		<div className="ordering">
			<div className="container">
				<div className="ordering__wrap">
					<div className="ordering__message">
						{messageView}
					</div>
					{fieldsView}
					<div className="ordering__date-wrap">
						<div className="ordering__date-field">
							<div className="ordering__field-title">Delivery Date</div>
							<DropdownMenu
								data={dateList}
								onSelected={(value) => updateValue('date', value)}
								defaultValue='Delivery Date'
								selectedItem={date}
								isFormField={true} />
						</div>
						<div className="ordering__date-field">
							<div className="ordering__field-title">Delivery Time</div>
							<DropdownMenu
								data={timeList}
								onSelected={(value) => updateValue('time', value)}
								defaultValue='Delivery Time'
								selectedItem={time}
								isFormField={true} />
						</div>
					</div>
					<div className="ordering__details">
						<OrderDetailsContainer />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Ordering;