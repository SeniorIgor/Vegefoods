export const getProductsForPage = (pageId, productsPerPage, products) => {
	const pageIndex = (pageId - 1) * productsPerPage;
	return products.slice(pageIndex, pageIndex + productsPerPage);
}
