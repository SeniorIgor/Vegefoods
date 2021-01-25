
import { AuthorizationError, ValidationError } from '../utils';
export default class ProductService {

	_authErrorHandler = () => console.log(`Call setAuthHandler with hadler argument.`);

	setAuthHandler = (handler) => this._authErrorHandler = handler;

	getResource = async (url, method = 'GET', body = null, headers = {}) => {

		if (body) {
			body = JSON.stringify(body);
			headers['Content-Type'] = 'application/json'
		}

		const response = await fetch(url, { method, body, headers });
		const data = await response.json();

		if (data.isOldToken) {
			// for handle old token errors
			this._authErrorHandler();
			throw new AuthorizationError(data.message, data.isOldToken);
		}

		if (data.isValidation) throw new ValidationError(data.message);

		if (!response.ok) {
			throw new Error(data.message || `Could not fetch ${url} received ${res.status}`);
		}

		return data;
	}

	registerUser = async (form) => {
		const data = await this.getResource('/api/auth/register', 'POST', { ...form });
		return data.message;
	}

	loginUser = async (form) => {
		return await this.getResource('/api/auth/login', 'POST', { ...form });
	}

	// ========================================================================
	// 																products
	// ========================================================================
	getProductById = async (productId) => {
		return await this.getResource(`/api/product/${productId}`, 'GET');
	}

	getProducts = async (category) => {
		const products = await this.getResource(`/api/products/${category}`, 'GET');
		return products;
	}
	// ========================================================================
	// 																categories 
	// ========================================================================
	getCategories = async () => {
		return await this.getResource('/api/category', 'GET');
	}
	// ========================================================================
	// 																	cart 
	// ========================================================================
	getCart = async (token) => {
		return await this.getResource('/api/cart', 'GET', null, {
			Authorization: `Bearer ${token}`
		});
	}

	updateCart = async (productId, quantity, token) => {
		return await this.getResource('/api/cart/update', 'POST', { productId, quantity }, {
			Authorization: `Bearer ${token}`
		});
	}
	// ========================================================================
	// 																favorites
	// ========================================================================
	getFavorites = async (token) => {
		return await this.getResource('/api/favorites', 'GET', null, {
			Authorization: `Bearer ${token}`
		});
	}

	setUpdateFavorites = async (productId, token) => {
		return await this.getResource('/api/favorites/update', 'POST', { productId }, {
			Authorization: `Bearer ${token}`
		});
	}
	// ========================================================================
	// 																ordering
	// ========================================================================
	getOrders = async (token) => {
		return await this.getResource('/api/orders', 'GET', null, {
			Authorization: `Bearer ${token}`
		});
	}

	createOrder = async (data, token) => {
		return await this.getResource('/api/order', 'POST', { ...data }, {
			Authorization: `Bearer ${token}`
		});
	}
	// ========================================================================
	// 																profile
	// ========================================================================
	getProfile = async (token) => {
		return await this.getResource('/api/profile', 'GET', null, {
			Authorization: `Bearer ${token}`
		});
	}

	updateProfile = async ({ name, phone, email }, token) => {
		return await this.getResource('/api/profile', 'POST', { name, phone, email }, {
			Authorization: `Bearer ${token}`
		});
	}
}