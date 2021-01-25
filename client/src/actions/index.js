import { fetchProducts } from './product-list';
import { fetchCart, updateShoppingCart, clearCart } from './shopping-cart';
import { fetchCategories } from './category-list';
import { calculateNumberPages } from './pages';
import { fetchProduct } from './product-item';
import { fetchFavorites, updateFavorites, clearFavorites } from './favorites';
import { fetchRegister, updateRegister, allowRegister, removeErrorRegister, clearRegister } from './auth-register';
import {
	authLogin, updateUser, loadedToStorage, updateLogin, authLogout,
	fetchLogin, allowLogin, clearLogin
} from './auth-login';
import { viewAccountPopup, closeAccountPopup } from './account-popup';
import { updateMainMenu } from './main-menu';
import { fetchProfile, updateProfile, clearProfile } from './profile';
import {
	fetchOrdering, updateOrdering, updateOrderingAll,
	allowCreateOrder, clearOrdering,
} from './ordering';
import { fetchOrders } from './order-list';
import { viewAuthPopup, closeAuthPopup } from './auth-popup';

export {
	// products
	fetchProducts,
	// product
	fetchProduct,
	// number pages
	calculateNumberPages,
	// categories
	fetchCategories,
	// cart
	fetchCart,
	updateShoppingCart,
	clearCart,
	// favorites
	fetchFavorites,
	updateFavorites,
	clearFavorites,
	// register
	fetchRegister,
	updateRegister,
	allowRegister,
	removeErrorRegister,
	clearRegister,
	// login
	authLogin,
	updateUser,
	loadedToStorage,
	updateLogin,
	authLogout,
	fetchLogin,
	allowLogin,
	clearLogin,
	// ordering
	fetchOrdering,
	updateOrdering,
	updateOrderingAll,
	allowCreateOrder,
	clearOrdering,
	// orders
	fetchOrders,
	// profile
	fetchProfile,
	updateProfile,
	clearProfile,
	// auth popup
	viewAuthPopup,
	closeAuthPopup,
	// account popup
	viewAccountPopup,
	closeAccountPopup,
	// main menu
	updateMainMenu,
};