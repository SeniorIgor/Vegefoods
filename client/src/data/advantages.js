import React from 'react';

export const advantagesData = [
	{
		id: 1,
		title: 'Бесплатная доставка',
		text: 'При заказе от 5000 руб.',
		image: <svg width="50" height="65" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M476.158 231.363l-13.259-53.035c3.625-.77 6.345-3.986 6.345-7.839v-8.551c0-18.566-15.105-33.67-33.67-33.67h-60.392V110.63c0-9.136-7.432-16.568-16.568-16.568H50.772c-9.136 0-16.568 7.432-16.568 16.568V256a8.017 8.017 0 0016.034 0V110.63c0-.295.239-.534.534-.534h307.841c.295 0 .534.239.534.534v145.372a8.017 8.017 0 0016.034 0v-9.088h94.569l.021.002.022-.001c11.637.008 21.518 7.646 24.912 18.171h-24.928a8.017 8.017 0 00-8.017 8.017v17.102c0 13.851 11.268 25.119 25.119 25.119h9.086v35.273h-20.962c-6.886-19.883-25.787-34.205-47.982-34.205s-41.097 14.322-47.982 34.205h-3.86v-60.393a8.017 8.017 0 00-16.034 0v60.391H192.817c-6.886-19.883-25.787-34.205-47.982-34.205s-41.097 14.322-47.982 34.205H50.772a.534.534 0 01-.534-.534v-17.637h34.739a8.017 8.017 0 000-16.034H8.017a8.017 8.017 0 000 16.034h26.188v17.637c0 9.136 7.432 16.568 16.568 16.568h43.304c-.002.178-.014.355-.014.534 0 27.996 22.777 50.772 50.772 50.772s50.772-22.776 50.772-50.772c0-.18-.012-.356-.014-.534h180.67c-.002.178-.014.355-.014.534 0 27.996 22.777 50.772 50.772 50.772 27.995 0 50.772-22.776 50.772-50.772 0-.18-.012-.356-.014-.534h26.203a8.017 8.017 0 008.017-8.017v-85.511c.001-21.112-15.576-38.653-35.841-41.738zm-100.976-87.062h60.392c9.725 0 17.637 7.912 17.637 17.637v.534h-78.029v-18.171zm0 86.58v-52.376h71.235l13.094 52.376h-84.329zM144.835 401.904c-19.155 0-34.739-15.583-34.739-34.739s15.584-34.739 34.739-34.739c19.155 0 34.739 15.583 34.739 34.739s-15.584 34.739-34.739 34.739zm282.188 0c-19.155 0-34.739-15.583-34.739-34.739s15.584-34.739 34.739-34.739c19.155 0 34.739 15.583 34.739 34.739s-15.584 34.739-34.739 34.739zm68.944-102.614h-9.086c-5.01 0-9.086-4.076-9.086-9.086v-9.086h18.171v18.172z" /><path d="M144.835 350.597c-9.136 0-16.568 7.432-16.568 16.568 0 9.136 7.432 16.568 16.568 16.568 9.136 0 16.568-7.432 16.568-16.568 0-9.136-7.432-16.568-16.568-16.568zM427.023 350.597c-9.136 0-16.568 7.432-16.568 16.568 0 9.136 7.432 16.568 16.568 16.568 9.136 0 16.568-7.432 16.568-16.568 0-9.136-7.432-16.568-16.568-16.568zM332.96 316.393H213.244a8.017 8.017 0 000 16.034H332.96a8.017 8.017 0 000-16.034zM127.733 282.188H25.119a8.017 8.017 0 000 16.034h102.614a8.017 8.017 0 000-16.034zM278.771 173.37a8.017 8.017 0 00-11.337.001l-71.292 71.291-37.087-37.087a8.016 8.016 0 00-11.337 0 8.016 8.016 0 000 11.337l42.756 42.756c1.565 1.566 3.617 2.348 5.668 2.348s4.104-.782 5.668-2.348l76.96-76.96a8.018 8.018 0 00.001-11.338z" /></svg>,
		color: '#e4b2d6',
	},
	{
		id: 2,
		title: 'Всегда свежие',
		text: 'Продукты хорошо упакованы',
		image: <svg width="50" height="65" viewBox="-13 0 512 512" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M442.273 380.914c-4.859-2.621-10.925-.812-13.55 4.047l-.364.66c-2.664 4.84-.898 10.922 3.942 13.586a9.998 9.998 0 0013.582-3.941l.437-.797c2.625-4.86.813-10.93-4.047-13.555zm0 0M314.355 83.367c-.027-.008-.125-.031-.156-.039-5.351-1.281-10.703 2.016-12.008 7.367-1.304 5.348 1.997 10.754 7.34 12.082l.153.04a9.966 9.966 0 002.328.273 9.98 9.98 0 009.68-7.64c1.304-5.348-1.993-10.755-7.337-12.083zm0 0" /><path d="M484.906 163.996c-3.035-16.894-16.633-31.02-33.832-35.16a44.284 44.284 0 00-3.902-.75c-8.371-47.45-40.82-67.57-67.379-76.074-20.113-6.442-39.445-7.168-50.012-6.934-2.101-5.187-5.722-12.074-11.84-18.976C307.387 14.195 287.078 0 250.261 0c-36.988 0-58.777 16.969-70.542 31.203-8.137 9.84-12.668 19.738-14.918 25.766-11.301 3.472-23.11 8.62-35.39 15.457-8.329-2.563-25.802-6.211-42.888 1.097-12.808 5.48-22.648 15.758-29.312 30.602-25.648 4.016-44.719 18.688-52.816 40.918-9.223 25.316-2.297 56.242 17.18 78.906-2.493 8.051-4.262 22.121 3.667 40.461C9.86 276.863 0 295.883 0 317.172c0 17.742 6.805 34.523 19.156 47.254 10.344 10.66 23.64 17.523 38.09 19.789 7.61 44.234 30.797 81.86 64.406 104.082C145.488 504.059 173.992 512 205.887 512c19.75 0 40.804-3.055 62.847-9.172 63.07-.441 121.47-30.156 160.407-81.703 3.328-4.406 2.453-10.68-1.954-14.008-4.41-3.332-10.68-2.453-14.007 1.953-32.75 43.36-80.684 69.61-133.012 73.317 2.871-10.137 8.055-25.543 16.625-42.32 13.309-26.055 30.102-46.903 50.129-62.325.234-.148.46-.308.687-.476a148.94 148.94 0 0121.739-13.82c.226-.118.457-.235.683-.348.907-.47 1.82-.922 2.735-1.368.398-.195.8-.39 1.199-.582.832-.394 1.664-.777 2.504-1.156.441-.199.879-.406 1.324-.601 37.203-16.418 62.785-45.711 74.21-84.864a203.41 203.41 0 01.622 15.778c0 22.867-3.816 45.238-11.348 66.496-1.843 5.207.88 10.926 6.086 12.77a9.997 9.997 0 0012.766-6.09c8.293-23.407 12.496-48.028 12.496-73.176 0-25.47-4.309-50.293-12.785-73.918 19.293-15.203 28.375-33.98 25.066-52.39zm-19.683 3.54c2.218 12.347-5.918 25.448-22.918 36.894-.07.047-.133.101-.203.148-.133.09-.262.188-.391.285-.14.106-.273.215-.406.328-.051.043-.11.086-.16.13-.004.003-.004.003-.004.007-.055.047-.102.098-.153.145a9.324 9.324 0 00-.668.687c-.03.035-.066.07-.097.106-.024.023-.047.047-.067.074-.066.078-.129.164-.195.246-.086.11-.168.223-.25.336a6.852 6.852 0 00-.297.426c-.023.039-.055.078-.082.117-.055.094-.105.187-.16.281-.082.137-.16.274-.234.418-.067.125-.13.258-.192.387l-.082.176c-.043.093-.082.195-.125.293a9.736 9.736 0 00-.187.507c-.04.114-.082.227-.118.344-.011.043-.027.09-.039.133-.043.144-.078.293-.113.441-.035.14-.066.285-.094.426-.027.125-.05.25-.07.375-.008.05-.012.102-.02.156a8.89 8.89 0 00-.054.465c-.016.149-.024.301-.031.45-.004.12-.016.242-.016.359v.078c0 .043.008.09.008.133a8.593 8.593 0 00.063 1.02c.007.07.007.14.015.21.133.961 3.082 23.867-4.098 51.254a134.758 134.758 0 01-2.95 9.746c-10.53 30.535-31.054 52.703-61.14 65.98l-.394.173c-.215.097-.422.203-.637.296a172.28 172.28 0 00-3.851 1.793c-.485.235-.97.465-1.45.703a161.39 161.39 0 00-4.175 2.13c-.657.343-1.305.706-1.954 1.062a168.696 168.696 0 00-4.848 2.746l-.05.031a172.332 172.332 0 00-3.742 2.246c-2.656-21.273-1.926-52.71 17.613-63.566a10.022 10.022 0 005.14-8.996c-.011-.442-.652-37.445 16.696-60.66 1.121 8.757 1.816 20.203.547 32.574-.563 5.496 3.433 10.406 8.93 10.973.347.035.69.05 1.03.05 5.067 0 9.41-3.832 9.938-8.98 2.758-26.887-2.449-49.485-4.043-55.567.176-5.023 1.657-25.398 13.914-37.5.008-.007.012-.015.02-.02.008-.01.02-.019.027-.026.04-.04.07-.082.11-.125a9.33 9.33 0 00.71-.817c.02-.027.047-.05.07-.078a40.585 40.585 0 011.778-2.168c.192-.215.383-.43.574-.637a30.288 30.288 0 01.965-1.011c4.848-4.871 10.489-7.633 16.532-8.055.046 0 .09-.012.136-.016.489-.027.965-.05 1.434-.05 2.191 0 4.129.304 5.68.68 9.605 2.312 17.171 10.05 18.828 19.253zM42.648 254.151c-6.296-16.304-1.613-25.742-.968-26.914 2.808-3.965 2.093-9.015-1.356-12.465-17.554-17.554-24.441-42.828-17.133-62.882 6.047-16.61 20.942-26.762 41.93-28.586.48-.043.95-.118 1.41-.227l-.105.024c.527-.114 13.012-2.594 22.156 7.699a9.971 9.971 0 007.48 3.36 9.957 9.957 0 006.641-2.528c4.125-3.668 4.5-9.988.832-14.117-7.379-8.305-15.898-12.082-23.297-13.672 3.871-5.524 8.555-9.504 14.02-11.875 15.047-6.524 32.02.523 32.144.574a10.004 10.004 0 009.016-.523c50.746-29.504 80.48-21.063 95.469-10.891-.012.004-.024.004-.035.008-.512.093-1.02.203-1.532.3-.8.157-1.605.313-2.402.481-.8.168-1.602.344-2.398.52-.457.101-.918.203-1.375.308-.961.219-1.918.442-2.872.676-.164.039-.324.082-.488.121-31.976 7.875-61.89 23.621-87.039 46.234a200.338 200.338 0 00-4.89 4.563c-.247.234-.497.465-.739.7-.105.1-.207.202-.308.304-.688.668-1.368 1.34-2.043 2.015-.34.34-.68.68-1.016 1.024a206.739 206.739 0 00-5.074 5.32c-.156.168-.309.34-.461.508-23.895 26.137-41.004 58.105-49.676 92.8l-.117.466a263.367 263.367 0 00-.832 3.468c-.082.356-.156.707-.238 1.063-.227 1.004-.45 2.012-.664 3.023-.125.59-.239 1.184-.356 1.774-.164.804-.332 1.61-.484 2.418l-.024.109c-.27.008-.539.031-.812.043a72.329 72.329 0 00-3.211.215c-.469.043-.934.082-1.399.137-.597.062-1.195.144-1.789.226-.476.067-.949.125-1.422.2-.617.097-1.234.214-1.847.331-.43.078-.864.149-1.29.239a71.39 71.39 0 00-3.007.695c-.293.074-.582.164-.875.242-.75.203-1.5.41-2.246.64-.285.087-.57.184-.856.278-.757.246-1.511.5-2.261.77-.227.082-.45.168-.676.254-.496.18-.996.355-1.485.55zm90.04 217.461c-30.676-20.281-51.348-55.843-56.75-97.593-.497-8.188-2.41-33.493-7.497-42.82-2.644-4.848-8.722-6.634-13.57-3.993-4.848 2.648-6.637 8.723-3.992 13.57 1.332 2.438 2.96 11.754 4.098 22.52-20.313-5.59-34.973-24.063-34.973-46.125 0-19.79 12.074-36.817 29.238-44.094a.117.117 0 00.031-.015 50.814 50.814 0 012.028-.801c.066-.024.133-.051.203-.074.68-.25 1.371-.481 2.066-.7l.102-.035a47.842 47.842 0 012.101-.598c.266-.066.532-.128.793-.19.426-.106.848-.204 1.274-.298.351-.07.7-.14 1.05-.207s.7-.129 1.051-.187c.38-.063.758-.125 1.137-.18.34-.047.684-.09 1.024-.129.382-.047.765-.098 1.148-.133.535-.05 1.078-.09 1.621-.125a52.73 52.73 0 011.36-.062c.421-.012.84-.028 1.261-.032.344-.003.692.004 1.035.008.414.004.825.016 1.23.032a38.132 38.132 0 012.36.152c.281.023.563.043.844.07a46.22 46.22 0 011.5.196c.258.035.52.062.777.101 18.953 2.938 34.266 17.035 38.992 35.34 0 .008.004.016.004.023.18.7.344 1.41.493 2.121.02.098.043.188.058.282.13.633.242 1.27.344 1.91.023.16.055.316.078.476.09.59.16 1.18.227 1.774.023.203.05.406.07.61.059.581.098 1.167.137 1.753.011.211.03.418.043.625.039.79.058 1.586.058 2.387 0 5.492-.922 10.879-2.746 16.012a10.006 10.006 0 005.445 12.523c30.97 13.434 43.235 59.047 47.301 79.867-12.433 1.422-22.25 5.418-29.258 11.996-4.027 3.778-4.226 10.11-.445 14.137a9.96 9.96 0 007.293 3.156 9.951 9.951 0 006.84-2.71c5.207-4.887 14.34-7.352 27.144-7.173h.098c.04 0 .074-.007.11-.007.042 0 .085.004.128.004 1.118-.028 2.22-.043 3.309-.047h.453a154.347 154.347 0 013.149.027c38.816.7 56.957 15.418 65.417 28.453v.004c.23.36.458.719.676 1.074.012.02.028.04.04.063a50.038 50.038 0 011.324 2.3l.418.794c.046.09.093.183.144.277.129.254.254.508.379.758.035.074.07.148.105.218.149.305.29.602.422.899.059.125.114.246.168.371l.235.531.187.434c.063.148.125.297.184.445.062.152.125.3.183.45l.14.363a38.993 38.993 0 01.45 1.191c.063.18.125.352.184.527.031.082.058.168.086.25l.183.543.004.004c.07.227.145.45.211.668-48.683 11.938-91.066 7.164-123.015-13.96zM287.633 415.5c1.601-17.613 2.324-34.594 2.187-50.91.032-.473.02-.953-.015-1.438-.125-10.672-.598-21.066-1.47-31.136-1.296-14.957-3.429-29.25-6.355-42.848 7.29-22.719 29.5-75.363 56.985-82.059 5.367-1.304 8.656-6.718 7.351-12.082-1.308-5.367-6.718-8.652-12.086-7.351-19.644 4.785-37.847 23.101-54.097 54.441a267.293 267.293 0 00-7.078 14.79c-2.961-8.622-6.297-16.891-10.028-24.766-23.527-49.641-54.191-66.918-55.484-67.63-4.84-2.66-10.922-.894-13.582 3.946-2.664 4.84-.895 10.922 3.945 13.582.38.211 13.766 7.953 28.887 28.27a107.669 107.669 0 00-19.84-3.786c-24.46-2.324-47.07 3.836-63.668 17.352-4.281 3.488-4.926 9.79-1.437 14.07 3.488 4.285 9.789 4.926 14.07 1.442 26.98-21.98 71.32-13.696 89.633 2.722 10.222 22.004 19.031 51.149 22.601 89.149-12.203-7.946-27.515-11.215-41.558-11.215h-.153c-5.523.012-9.996 4.496-9.984 10.02.008 5.519 4.484 9.984 10 9.984h.121c8.77 0 36.926 1.883 43.25 25.14.215 26.676-1.996 56.93-7.535 91.176-11.418-14.148-33.727-30.355-76.29-31.386-3.69-20.832-16.179-72.196-51.76-93.579a67.927 67.927 0 001.413-17.472c-.015-.309-.039-.613-.058-.922-.047-.79-.106-1.57-.176-2.352-.031-.312-.067-.625-.102-.941-.09-.82-.191-1.637-.312-2.445a40.65 40.65 0 00-.098-.68c-4.12-26.395-23.41-47.945-49.172-54.914 16.301-82.828 84.48-145.578 165.176-153.145a176.507 176.507 0 0116.398-.766c3.278 0 6.598.09 9.876.266a9.996 9.996 0 0010.53-9.441c.302-5.516-3.929-10.23-9.445-10.527-3.636-.2-7.324-.301-10.96-.301-3.528 0-7.051.105-10.56.293-5.562-6.844-17.417-18.414-37.116-23.672-9.528-2.543-19.653-3.328-30.328-2.371 8.492-13.89 26.222-32.004 60.953-32.004 42.222 0 56.375 21.582 60.734 31.914l-5.125 4.07a9.999 9.999 0 00-1.605 14.051 9.978 9.978 0 007.836 3.777 9.96 9.96 0 006.214-2.168l8.09-6.43c7.082-.386 26.852-.706 47.285 5.84 29.743 9.524 47.692 29.274 53.47 58.762-.032.012-.06.02-.087.032-.414.14-.824.285-1.234.437-.133.05-.27.094-.402.145-.528.199-1.051.41-1.567.632-.219.09-.433.192-.648.29-.301.132-.606.261-.903.402-.273.129-.543.265-.808.398-.242.117-.489.235-.727.36-.281.144-.555.293-.828.441-.23.125-.46.25-.687.379-.278.156-.551.316-.825.477-.226.132-.449.269-.675.406-.27.164-.536.336-.805.508-.223.14-.45.289-.672.437-.262.172-.523.352-.781.531-.227.157-.453.317-.676.477-.254.18-.504.363-.754.55-.23.173-.457.348-.684.524-.242.184-.48.371-.718.563-.235.191-.47.382-.703.578-.2.168-.407.336-.606.508-20.207-20.586-44.512-36.82-70.879-47.235-5.137-2.027-10.945.488-12.976 5.625-2.028 5.137.492 10.95 5.629 12.977 24.168 9.547 46.425 24.543 64.859 43.582-10.117 14.332-12.715 31.61-13.367 40.242-28.465 22.27-32.66 64.84-33.219 80.379-30.77 22.375-24.363 73.015-20.95 90.953-16.374 13.52-30.796 30.355-42.835 50.082zm0 0" /><path d="M200.535 346.566a9.886 9.886 0 006.871-2.765c4.207-3.582 4.711-9.895 1.133-14.098-3.582-4.207-9.898-4.71-14.101-1.129-.278.239-.547.477-.805.723-3.988 3.824-4.153 10.183-.332 14.172a9.992 9.992 0 007.234 3.097zm0 0" /></svg>,
		color: '#dcc698',
	},
	{
		id: 3,
		title: 'Превосходное качество',
		text: 'Качественные продукты',
		image: <svg width="50" height="65" fill="#fff" viewBox="0 0 512.016 512.016" xmlns="http://www.w3.org/2000/svg"><path d="M480.516 451.667l-75.202-130.253a20.077 20.077 0 0110.656-6.485c11.846-2.791 21.669-10.681 26.949-21.646 5.281-10.965 5.324-23.564.121-34.565a20.072 20.072 0 015.535-24.251c9.462-7.655 14.889-19.025 14.889-31.195s-5.427-23.541-14.889-31.195a20.072 20.072 0 01-5.535-24.251c5.204-11.002 5.16-23.601-.121-34.566-5.28-10.965-15.103-18.855-26.95-21.646a20.073 20.073 0 01-15.509-19.448c-.084-12.17-5.591-23.502-15.106-31.09s-21.79-10.435-33.672-7.809a20.074 20.074 0 01-22.412-10.793c-5.357-10.928-15.234-18.749-27.1-21.457-11.867-2.709-24.159.053-33.727 7.574a20.07 20.07 0 01-24.874 0c-9.568-7.521-21.86-10.281-33.726-7.574-11.866 2.708-21.743 10.529-27.1 21.457a20.072 20.072 0 01-22.411 10.793c-11.884-2.624-24.158.221-33.672 7.809-9.515 7.588-15.021 18.92-15.106 31.09a20.074 20.074 0 01-15.51 19.448c-11.846 2.791-21.669 10.681-26.949 21.646-5.281 10.965-5.324 23.564-.121 34.565a20.072 20.072 0 01-5.535 24.251c-9.462 7.655-14.889 19.025-14.889 31.195s5.427 23.541 14.889 31.195a20.072 20.072 0 015.535 24.251c-5.204 11.002-5.16 23.601.121 34.566 5.28 10.965 15.103 18.855 26.95 21.646a20.07 20.07 0 0110.656 6.485L31.5 451.667a10.001 10.001 0 0011.278 14.651l52.377-14.21 13.883 52.465a10 10 0 0018.328 2.442l64.168-111.141a40 40 0 0018.311 9.653c11.864 2.706 24.158-.053 33.727-7.574a20.07 20.07 0 0124.874 0c7.16 5.628 15.844 8.591 24.735 8.591 2.99 0 6.005-.335 8.991-1.017a39.995 39.995 0 0018.311-9.653l64.168 111.141a10 10 0 0018.328-2.442l13.883-52.465 52.377 14.21a9.997 9.997 0 0011.277-14.651zM122.17 476.015l-10.254-38.75a10.002 10.002 0 00-12.285-7.093l-38.686 10.495 53.254-92.238a40.002 40.002 0 0012.463 17.039c9.515 7.588 21.79 10.435 33.672 7.809a20.066 20.066 0 0118.221 5.079zm175.551-89.986a20.043 20.043 0 01-16.915-3.798c-7.301-5.74-16.048-8.609-24.798-8.609-8.748 0-17.499 2.87-24.798 8.609a20.033 20.033 0 01-16.915 3.798 20.038 20.038 0 01-13.592-10.762 40.022 40.022 0 00-44.684-21.519c-5.961 1.317-12.116-.111-16.888-3.917s-7.534-9.489-7.577-15.593a40.02 40.02 0 00-30.922-38.775 20.04 20.04 0 01-13.517-10.857 20.04 20.04 0 01-.06-17.337 40.021 40.021 0 00-11.037-48.351c-4.746-3.839-7.467-9.542-7.467-15.646s2.722-11.807 7.468-15.646a40.022 40.022 0 0011.036-48.352 20.035 20.035 0 01.061-17.336 20.037 20.037 0 0113.516-10.857 40.02 40.02 0 0030.922-38.775 20.036 20.036 0 017.577-15.593 20.032 20.032 0 0116.889-3.917 40.026 40.026 0 0044.683-21.519 20.038 20.038 0 0113.592-10.762 20.04 20.04 0 0116.915 3.798 40.019 40.019 0 0049.596 0 20.042 20.042 0 0116.915-3.798 20.038 20.038 0 0113.592 10.762 40.025 40.025 0 0044.684 21.519c5.959-1.319 12.116.111 16.888 3.917s7.534 9.489 7.577 15.593a40.02 40.02 0 0030.922 38.775 20.04 20.04 0 0113.517 10.857 20.04 20.04 0 01.06 17.337 40.021 40.021 0 0011.037 48.351c4.746 3.839 7.467 9.542 7.467 15.646s-2.722 11.807-7.468 15.646a40.022 40.022 0 00-11.036 48.352 20.035 20.035 0 01-.061 17.336 20.037 20.037 0 01-13.516 10.857 40.02 40.02 0 00-30.922 38.775 20.036 20.036 0 01-7.577 15.593 20.04 20.04 0 01-16.889 3.917 40.02 40.02 0 00-44.683 21.519 20.04 20.04 0 01-13.592 10.762zm114.664 44.143a10.002 10.002 0 00-12.285 7.093l-10.254 38.75-56.384-97.659a20.058 20.058 0 0118.22-5.079c11.885 2.625 24.157-.221 33.672-7.809a39.996 39.996 0 0012.463-17.039l53.254 92.238z" /><path d="M303.586 278.895a10 10 0 009.52-13.062l-15.763-49.008 41.569-30.543a10 10 0 00-5.92-18.058h-51.44l-16.041-48.875a10 10 0 00-19.002 0l-16.041 48.875h-51.44a10 10 0 00-5.92 18.058l41.569 30.543-15.763 49.008a10 10 0 0015.374 11.169l41.724-30.126 41.724 30.126a9.965 9.965 0 005.85 1.893zm-41.724-52.46c-1.748-1.262-3.801-1.893-5.854-1.893s-4.106.631-5.854 1.893l-22.874 16.516 8.639-26.859a10 10 0 00-3.599-11.121l-22.795-16.749h28.184a10 10 0 009.501-6.882l8.798-26.807 8.798 26.807a10 10 0 009.501 6.882h28.184l-22.795 16.749a10 10 0 00-3.599 11.121l8.639 26.859z" /><path d="M396.008 203.272c0-77.196-62.804-140-140-140s-140 62.804-140 140c0 58.727 37.077 111.632 92.262 131.647 5.191 1.882 10.927-.799 12.811-5.991 1.883-5.192-.799-10.927-5.991-12.811-47.301-17.155-79.081-62.504-79.081-112.845 0-66.168 53.832-120 120-120s120 53.832 120 120c0 50.344-31.783 95.694-79.087 112.848-5.192 1.883-7.875 7.618-5.992 12.81a10.005 10.005 0 009.401 6.594 9.99 9.99 0 003.409-.602c55.188-20.013 92.268-72.919 92.268-131.65z" /><path d="M256.008 323.27c-2.63 0-5.21 1.07-7.07 2.93s-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.44 2.93 7.07 2.93 5.21-1.07 7.07-2.93 2.93-4.44 2.93-7.07-1.07-5.21-2.93-7.07-4.44-2.93-7.07-2.93z" /></svg>,
		color: '#a2d1e1',
	},
	{
		id: 4,
		title: 'Поддержка',
		text: 'поддержка 24/7',
		image: <svg width="50" height="65" fill="#fff" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M37 39.54v-7.135A17.042 17.042 0 0046 35c9.374 0 17-7.626 17-17S55.374 1 46 1c-8.59 0-15.694 6.41-16.825 14.695A16.849 16.849 0 0023 13.283V8c0-1.654-1.346-3-3-3H8C6.346 5 5 6.346 5 8v8c0 1.366.923 2.508 2.174 2.87A16.998 16.998 0 003 30v9.54A5.983 5.983 0 001 44c0 3.309 2.691 6 6 6v8c0 2.757 2.243 5 5 5h16c2.757 0 5-2.243 5-5v-8c3.309 0 6-2.691 6-6 0-1.771-.776-3.36-2-4.46zM46 3c2.232 0 4.254 2.387 5.546 6H40.454C41.746 5.387 43.768 3 46 3zm6.159 8c.462 1.821.746 3.858.816 6H39.024c.07-2.142.354-4.179.816-6zm8.79 6h-5.975c-.063-2.139-.322-4.16-.752-6h5.034a14.878 14.878 0 011.693 6zM46 33c-2.232 0-4.254-2.387-5.546-6h11.092c-1.292 3.613-3.314 6-5.546 6zm-9.272-6h1.608c.663 2.039 1.541 3.791 2.59 5.122A14.864 14.864 0 0137 29.984 17.097 17.097 0 0036.728 27zm3.113-2c-.462-1.821-.746-3.858-.816-6h13.951c-.07 2.142-.354 4.179-.816 6zm15.133-6h5.975a14.878 14.878 0 01-1.693 6h-5.034c.43-1.84.689-3.861.752-6zm-17.948-2h-5.975a14.878 14.878 0 011.693-6h5.034c-.43 1.84-.689 3.861-.752 6zm0 2c.063 2.139.322 4.16.752 6h-1.543a17.018 17.018 0 00-3.294-6zm14.072 13.089c1.038-1.327 1.908-3.066 2.566-5.089h4.308a15.047 15.047 0 01-6.874 5.089zM57.972 9h-4.308c-.658-2.023-1.528-3.762-2.566-5.089A15.047 15.047 0 0157.972 9zm-17.07-5.089C39.864 5.238 38.994 6.977 38.336 9h-4.308a15.047 15.047 0 016.874-5.089zM7 8a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1h-7v3.764c0 .22-.35.301-.447.105L10.618 17H8a1 1 0 01-1-1zM5 30c0-4.043 1.652-7.894 4.528-10.708l1.237 2.473A2.224 2.224 0 0012.764 23 2.238 2.238 0 0015 20.764V19h5c1.654 0 3-1.346 3-3v-.69c6.914 1.403 12 7.523 12 14.69v8.35a5.976 5.976 0 00-2-.35v-8c0-2.757-2.243-5-5-5H12c-2.757 0-5 2.243-5 5v8c-.702 0-1.373.128-2 .35zm12 12c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm3 5c.632 0 1.241.092 1.823.249L20 49.438l-1.823-2.188A6.94 6.94 0 0120 47zm-3.729 1.087L20 52.563l3.73-4.475A6.993 6.993 0 0127 54v1H13v-1a6.993 6.993 0 013.271-5.913zm7.106-2.424A4.972 4.972 0 0025 42c0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.451.632 2.749 1.623 3.663C13.33 47.002 11 50.232 11 54v1H9V35h22v20h-2v-1c0-3.768-2.33-6.998-5.623-8.337zM31 33H9v-3c0-1.654 1.346-3 3-3h16c1.654 0 3 1.346 3 3zM3 44c0-2.206 1.794-4 4-4v8c-2.206 0-4-1.794-4-4zm25 17H12c-1.654 0-3-1.346-3-3v-1h22v1c0 1.654-1.346 3-3 3zm5-13v-8c2.206 0 4 1.794 4 4s-1.794 4-4 4z" /><path d="M17 29h6v2h-6zM9 11h2v2H9zM13 11h2v2h-2zM17 11h2v2h-2zM57 61h-2V41h-6v20h-2V45h-6v18h22V49h-6zm-12 0h-2V47h2zm6-18h2v18h-2zm8 8h2v10h-2z" /></svg>,
		color: '#dcd691',
	}
];