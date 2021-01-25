import { STORAGE_NAME } from '../constants';

export default class AuthService {

	static logIn(user) {
		localStorage.setItem(STORAGE_NAME, JSON.stringify({ ...user }));
	}

	static getUser() {
		return JSON.parse(localStorage.getItem(STORAGE_NAME));
	}

	static logOut() {
		localStorage.removeItem(STORAGE_NAME);
	}
}