import React from 'react';

import './contacts.scss';

const columns = [
	{
		id: 1,
		title: 'Позвоните нам',
		text: 'Есть вопросы? Мы поможем!',
		image: <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 512.001 512.001"><path d="M97.211 0C70.804 0 49.32 21.484 49.32 47.891V464.11c0 26.406 21.484 47.89 47.891 47.89h137.787V0H97.211z" fill="#efefef" /><path d="M77.849 464.109V47.891C77.849 21.484 99.333 0 125.74 0H97.211C70.804 0 49.32 21.484 49.32 47.891V464.11c0 26.406 21.484 47.89 47.891 47.89h28.529c-26.407 0-47.891-21.484-47.891-47.891z" fill="#ddd" /><path d="M102.06 26.716c-13.316 0-24.211 10.895-24.211 24.211v56.664c0 13.316 10.895 24.211 24.211 24.211 13.316 0 24.211-10.895 24.211-24.211V50.927c0-13.316-10.895-24.211-24.211-24.211z" fill="#535454" /><path d="M102.06 107.59V50.927c0-8.913 4.885-16.735 12.105-20.937-16.082-9.36-36.316 2.407-36.316 20.937v56.664c0 18.521 20.223 30.304 36.316 20.937-7.22-4.203-12.105-12.025-12.105-20.938z" fill="#444443" /><path d="M414.789 0H234.997c-26.407 0-47.891 21.484-47.891 47.891V464.11c0 26.407 21.484 47.891 47.891 47.891h179.792c26.407 0 47.891-21.484 47.891-47.891V47.891C462.68 21.484 441.197 0 414.789 0z" fill="#535454" /><path d="M213.636 464.109V47.891C213.636 21.484 235.119 0 261.526 0h-26.529c-26.407 0-47.891 21.484-47.891 47.891V464.11c0 26.407 21.484 47.891 47.891 47.891h26.529c-26.407-.001-47.89-21.485-47.89-47.892z" fill="#444443" /><path d="M436.146 464.109c0 11.795-9.562 21.357-21.357 21.357H234.997c-11.795 0-21.357-9.562-21.357-21.357V47.891c0-11.795 9.562-21.357 21.357-21.357h22.407a7.992 7.992 0 017.992 7.992v5.068c0 6.8 5.563 12.363 12.363 12.363h94.267c6.8 0 12.363-5.563 12.363-12.363v-7.33a5.731 5.731 0 015.731-5.731h24.669c11.795 0 21.357 9.562 21.357 21.357v416.219z" fill="#a4d9f4" /><path d="M239.119 464.109V47.891c0-11.155 8.555-20.3 19.46-21.261-1.241-.184.079-.056-23.582-.096-11.795 0-21.357 9.562-21.357 21.357V464.11c0 11.795 9.562 21.357 21.357 21.357h25.478c-11.794-.001-21.356-9.562-21.356-21.358z" fill="#7cc9e8" /><g fill="#666"><path d="M355.99 34.261h-40.343a7.727 7.727 0 010-15.454h40.343a7.727 7.727 0 010 15.454zM287.057 32.959c-5.532-3.636-4.191-12.525 2.771-14.001 4.736-.977 9.242 2.691 9.242 7.572 0 3.589-2.477 6.806-6.223 7.583-.494.092-4.217-.09-5.79-1.154zM97.77 58.386c-3.674-2.51-4.433-7.304-2.132-10.715 4.089-6.211 14.145-3.457 14.145 4.286 0 3.737-2.687 6.912-6.213 7.572-.963.202-4.018.028-5.8-1.143z" /></g><path d="M97.77 85.688c-3.674-2.51-4.433-7.304-2.132-10.715 3.204-4.983 11.083-4.536 13.558 1.329 1.17 2.765.59 6.159-1.669 8.417-1.842 1.842-6.587 3.052-9.757.969z" fill="#f9d698" /><path d="M97.77 112.978c-5.099-3.351-4.404-11.132 1.329-13.558 8.094-3.163 14.221 6.808 8.428 12.6-2.009 2.009-6.327 3.302-9.757.958z" fill="#666" /><path d="M263.357 114.163h-20.676a3.457 3.457 0 01-3.446-3.446V90.04a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.455 3.455 0 01-3.446 3.447z" fill="#70b5e8" /><path d="M312.034 114.163h-20.676a3.457 3.457 0 01-3.446-3.446V90.04a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.447z" fill="#efefef" /><path d="M360.71 114.163h-20.676a3.457 3.457 0 01-3.446-3.446V90.04a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.447z" fill="#92b620" /><path d="M409.386 114.163H388.71a3.457 3.457 0 01-3.446-3.446V90.04a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.447z" fill="#898989" /><path d="M263.357 163.319h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.455 3.455 0 01-3.446 3.446z" fill="#92b620" /><path d="M312.034 163.319h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#898989" /><path d="M360.71 163.319h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#70b5e8" /><path d="M409.386 163.319H388.71a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#f94a46" /><path d="M263.357 213.114h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.455 3.455 0 01-3.446 3.446z" fill="#dda36f" /><path d="M312.034 213.114h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#f9d698" /><path d="M360.71 213.114h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#898989" /><path d="M409.386 213.114H388.71a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#f9d698" /><g fill="#70b5e8"><path d="M263.357 262.27h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.455 3.455 0 01-3.446 3.446zM312.034 262.27h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" /></g><path d="M360.71 262.27h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#f94a46" /><path d="M263.357 311.426h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.455 3.455 0 01-3.446 3.446z" fill="#efefef" /><path d="M312.034 311.426h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#92b620" /><path d="M360.71 311.426h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#898989" /><path d="M409.386 262.27H388.71a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#ffb70d" /><path d="M263.358 463.095h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#92b620" /><path d="M312.034 463.095h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#70b5e8" /><path d="M360.71 463.095h-20.676a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#92b620" /><path d="M409.386 463.095H388.71a3.457 3.457 0 01-3.446-3.446v-20.676a3.457 3.457 0 013.446-3.446h20.676a3.457 3.457 0 013.446 3.446v20.676a3.457 3.457 0 01-3.446 3.446z" fill="#efefef" /></svg>,
		link: 'tel:+77777777777',
		linkText: '+7 (777) 777-77-77',
	},
	{
		id: 2,
		title: 'Напишите нам',
		text: 'Идеи? Предложения? Мы открыты для любых вопросов!',
		image: <svg viewBox="0 0 483.251 483.251" width="65" height="65" xmlns="http://www.w3.org/2000/svg"><path d="M475.367 195.095v264.582a22.987 22.987 0 01-7.661 17.303l-.695.695a23.327 23.327 0 01-15.217 5.575H31.463a23.247 23.247 0 01-15.099-5.575 1.961 1.961 0 01-.695-.695 23.075 23.075 0 01-7.785-17.303V195.095a22.495 22.495 0 016.271-15.794 21.821 21.821 0 015.893-4.88 23.672 23.672 0 0111.38-2.905h420.361a24.656 24.656 0 0117.421 7.661 23.767 23.767 0 016.157 15.918z" fill="#f6b863" /><path d="M469.232 179.154c-1.656 2.045-227.483 181.639-227.483 181.639L14.142 179.354l.1-.094v-.1L228.861 4.569a20.381 20.381 0 0125.719 0z" fill="#eaa14e" /><path d="M421.219 57.415V217.82L241.726 360.793 62.132 217.626V57.415z" fill="#eeefee" /><path d="M467.677 476.968a4.469 4.469 0 01-.684.684L264.804 342.777l18.505-14.904zM218.541 342.677L16.352 477.634a1.496 1.496 0 01-.684-.684l184.273-149.273z" fill="#eaa14e" /><g fill="#dbd8dd"><path d="M101.912 99.517h279.421v12.123H101.912zM101.912 146.275h279.421v12.123H101.912zM101.912 193.039h279.421v12.123H101.912zM148.841 239.796h185.57v12.123h-185.57z" /></g></svg>,
		link: 'mailto:email@email.com',
		linkText: 'email@email.com',
	},
	{
		id: 3,
		title: 'Напишите нам',
		text: 'В нашем Facebook чате помогут разобраться с вашим вопросом!',
		image: <svg viewBox="0 0 24 24" width="65" height="65" xmlns="http://www.w3.org/2000/svg"><path d="M21 0H3C1.345 0 0 1.345 0 3v18c0 1.654 1.345 3 3 3h18c1.654 0 3-1.346 3-3V3c0-1.655-1.346-3-3-3z" fill="#3b5999" /><path d="M16.5 12V9c0-.828.672-.75 1.5-.75h1.5V4.5h-3A4.5 4.5 0 0012 9v3H9v3.75h3V24h4.5v-8.25h2.25l1.5-3.75z" fill="#fff" /></svg>,
		link: 'https://ru-ru.facebook.com/',
		linkText: 'Facebook',
	},
	{
		id: 4,
		title: 'Напишите нам',
		text: 'В нашем Twitter чате помогут разобраться с вашим вопросом!',
		image: <svg width="65" height="65" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.319 291.319"><path d="M145.659 0c80.45 0 145.66 65.219 145.66 145.66 0 80.45-65.21 145.659-145.66 145.659S0 226.109 0 145.66C0 65.219 65.21 0 145.659 0z" fill="#26a6d1" /><path d="M236.724 98.129c-6.363 2.749-13.21 4.597-20.392 5.435 7.338-4.27 12.964-11.016 15.613-19.072a71.965 71.965 0 01-22.55 8.366c-6.473-6.691-15.695-10.87-25.909-10.87-19.591 0-35.486 15.413-35.486 34.439 0 2.704.31 5.335.919 7.857-29.496-1.438-55.66-15.158-73.157-35.996a33.46 33.46 0 00-4.807 17.315c0 11.944 6.263 22.504 15.786 28.668-5.826-.182-11.289-1.721-16.086-4.315v.437c0 16.696 12.235 30.616 28.476 33.784a36.707 36.707 0 01-9.35 1.211c-2.285 0-4.506-.209-6.673-.619 4.515 13.692 17.625 23.651 33.165 23.925-12.153 9.249-27.457 14.748-44.089 14.748-2.868 0-5.69-.164-8.476-.482 15.722 9.777 34.367 15.485 54.422 15.485 65.292 0 100.997-52.51 100.997-98.029l-.1-4.461a70.838 70.838 0 0017.697-17.826z" fill="#fff" /></svg>,
		link: 'https://twitter.com/?lang=ru',
		linkText: 'Twitter',
	},
];

const Contacts = ({ map }) => {

	const columnsView = columns.map(({ id, title, text, image, link, linkText }) => (
		<div key={id} className="contacts__column contacts-column">
			<div className="contacts-column__wrap">
				<div className="contacts-column__image-wrap">
					{/* <img src={image} className="contacts-column__image"></img> */}
					{image}
				</div>
				<h2 className="contacts-column__title">{title}</h2>
				<div className="contacts-column__text">{text}</div>
				<div className="contacts-column__link-wrap">
					<a href={link} className="contacts-column__link">{linkText}</a>
				</div>
			</div>
		</div>
	));

	return (
		<div className="contacts">
			<div className="container">
				<div className="contacts__wrap">
					<div className="contacts__main">
						{columnsView}
					</div>
					<div className="contacts__address">
						<div className="contacts__address-wrap">
							<h2 className="contacts__title">
								Основной офис
							</h2>
							<div className="contacts__address-text">
								Москва, ул. Садовническая, д. 82, стр. 2
							</div>
						</div>
					</div>
					<div className="contacts__map">
						<div className="contacts__map-wrap">
							{map}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contacts;