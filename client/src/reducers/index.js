import updateProductList from './product-list';
import updateShoppingCart from './shopping-cart';
import updateCategoryList from './category-list';
import updatePages from './pages';
import updateProductItem from './product-item';
import updateFavorites from './favorites';
import updateAccountPopup from './account-popup';
import updateMainMenu from './main-menu';
import updateProfile from './profile';
import updateOrdering from './ordering';
import updateOrderList from './order-list';
import updateRegister from './auth-register';
import updateAuthPopup from './auth-popup';
import updateLogin from './auth-login';

const reducer = (state, action) => {
	return {
		productList: updateProductList(state, action),
		shoppingCart: updateShoppingCart(state, action),
		favorites: updateFavorites(state, action),
		categoryList: updateCategoryList(state, action),
		pages: updatePages(state, action),
		productItem: updateProductItem(state, action),
		register: updateRegister(state, action),
		login: updateLogin(state, action),
		authPopup: updateAuthPopup(state, action),
		accountPopup: updateAccountPopup(state, action),
		mainMenu: updateMainMenu(state, action),
		profile: updateProfile(state, action),
		ordering: updateOrdering(state, action),
		orderList: updateOrderList(state, action),
	};
};

export default reducer;