import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import Contacts from '../../components/contacts';

const mapState = {
	center: [55.736076, 37.641876],
	zoom: 16,
};

const placeProps = {
	geometry: mapState.center,
	properties: {
		// hintContent: "VEGEFOODS",
		iconCaption: 'VEGEFOODS',
		balloonContent: '<strong>Основной офис</strong> <br>Москва, ул. Садовническая, д. 82, стр. 2',
	},
	modules: ["geoObject.addon.balloon", "geoObject.addon.hint"]
};

const ContactsContainer = () => {

	const map = (
		<YMaps>
			<Map width="100%" height="100%" state={mapState}>
				<Placemark {...placeProps} />
			</Map>
		</YMaps>
	);

	return <Contacts map={map} />;
}

export default ContactsContainer;