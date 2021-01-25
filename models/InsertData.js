const Category = require('./Category');
const Product = require('./Product');
const path = require('path');

// InsertData.createCategory({ name: 'Овощи', value: 'vegetables' });
// InsertData.createCategory({ name: 'Фрукты', value: 'fruits' });
// InsertData.createCategory({ name: 'Напитки', value: 'drinks' });
// InsertData.createProduct({
// 	name: "Болгарский перец",
// 	categoryName: 'Овощи',
// 	price: 150,
// 	stocks: 600,
// 	unit: 'кг',
// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci ipsum distinctio, asperiores in voluptate, nulla at, commodi tenetur ea laboriosam sequi dolore labore! In rem eum accusamus perspiciatis. Necessitatibus!',
// 	nameImg: 'product-1.jpg',
// 	reviewQuantity: 275,
// 	rating: 4.5,
// 	sold: 400,
// 	discount: 40,
// });
// InsertData.createProduct({
// 	name: 'Клубника',
// 	categoryName: 'Фрукты',
// 	price: 250,
// 	stocks: 200,
// 	unit: 'кг',
// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci ipsum distinctio, asperiores in voluptate, nulla at, commodi tenetur ea laboriosam sequi dolore labore! In rem eum accusamus perspiciatis. Necessitatibus!',
// 	nameImg: 'product-2.jpg',
// 	reviewQuantity: 195,
// 	rating: 4.5,
// 	sold: 400,
// 	discount: 0,
// });
// InsertData.createProduct({
// 	name: 'Зеленая фасоль',
// 	categoryName: 'Овощи',
// 	price: 90,
// 	stocks: 150,
// 	unit: 'кг',
// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci ipsum distinctio, asperiores in voluptate, nulla at, commodi tenetur ea laboriosam sequi dolore labore! In rem eum accusamus perspiciatis. Necessitatibus!',
// 	nameImg: 'product-3.jpg',
// 	reviewQuantity: 205,
// 	rating: 3.8,
// 	sold: 400,
// 	discount: 0,
// });
// InsertData.createProduct({
// 	name: 'Цветная капуста',
// 	categoryName: 'Овощи',
// 	price: 120,
// 	stocks: 300,
// 	unit: 'кг',
// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci ipsum distinctio, asperiores in voluptate, nulla at, commodi tenetur ea laboriosam sequi dolore labore! In rem eum accusamus perspiciatis. Necessitatibus!',
// 	nameImg: 'product-4.jpg',
// 	reviewQuantity: 205,
// 	rating: 4.5,
// 	sold: 350,
// 	discount: 15,
// });
// InsertData.createProduct({
// 	name: 'Томаты на ветке',
// 	categoryName: 'Овощи',
// 	price: 139.9,
// 	stocks: 400,
// 	unit: 'кг',
// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci ipsum distinctio, asperiores in voluptate, nulla at, commodi tenetur ea laboriosam sequi dolore labore! In rem eum accusamus perspiciatis. Necessitatibus!',
// 	nameImg: 'product-5.jpg',
// 	reviewQuantity: 305,
// 	rating: 4.3,
// 	sold: 350,
// 	discount: 0,
// });
// InsertData.createProduct({
// 	name: 'Капуста Брокколи',
// 	categoryName: 'Овощи',
// 	price: 319.9,
// 	stocks: 200,
// 	unit: 'кг',
// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci ipsum distinctio, asperiores in voluptate, nulla at, commodi tenetur ea laboriosam sequi dolore labore! In rem eum accusamus perspiciatis. Necessitatibus!',
// 	nameImg: 'product-6.jpg',
// 	reviewQuantity: 270,
// 	rating: 5,
// 	sold: 270,
// 	discount: 5,
// });
// InsertData.createProduct({
// 	name: 'Морковь мытая',
// 	categoryName: 'Овощи',
// 	price: 59.9,
// 	stocks: 300,
// 	unit: 'кг',
// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci ipsum distinctio, asperiores in voluptate, nulla at, commodi tenetur ea laboriosam sequi dolore labore! In rem eum accusamus perspiciatis. Necessitatibus!',
// 	nameImg: 'product-7.jpg',
// 	reviewQuantity: 150,
// 	rating: 4.6,
// 	sold: 160,
// 	discount: 0,
// });
// InsertData.createProduct({
// 	name: 'Нектар фруктовый',
// 	categoryName: 'Напитки',
// 	price: 399.9,
// 	stocks: 600,
// 	unit: 'шт',
// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci ipsum distinctio, asperiores in voluptate, nulla at, commodi tenetur ea laboriosam sequi dolore labore! In rem eum accusamus perspiciatis. Necessitatibus!',
// 	nameImg: 'product-8.jpg',
// 	reviewQuantity: 230,
// 	rating: 4.7,
// 	sold: 470,
// 	discount: 20,
// });
// InsertData.createProduct({
// 	name: 'Лук красный',
// 	categoryName: 'Овощи',
// 	price: 59.9,
// 	stocks: 200,
// 	unit: 'кг',
// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci ipsum distinctio, asperiores in voluptate, nulla at, commodi tenetur ea laboriosam sequi dolore labore! In rem eum accusamus perspiciatis. Necessitatibus!',
// 	nameImg: 'product-9.jpg',
// 	reviewQuantity: 140,
// 	rating: 4.5,
// 	sold: 270,
// 	discount: 0,
// });
// InsertData.createProduct({
// 	name: 'Яброки микс',
// 	categoryName: 'Фрукты',
// 	price: 69.9,
// 	stocks: 450,
// 	unit: 'кг',
// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci ipsum distinctio, asperiores in voluptate, nulla at, commodi tenetur ea laboriosam sequi dolore labore! In rem eum accusamus perspiciatis. Necessitatibus!',
// 	nameImg: 'product-10.jpg',
// 	reviewQuantity: 120,
// 	rating: 4.2,
// 	sold: 360,
// 	discount: 0,
// });
// InsertData.createProduct({
// 	name: 'Чеснок Фермерский',
// 	categoryName: 'Фрукты',
// 	price: 59.9,
// 	stocks: 300,
// 	unit: 'шт',
// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci ipsum distinctio, asperiores in voluptate, nulla at, commodi tenetur ea laboriosam sequi dolore labore! In rem eum accusamus perspiciatis. Necessitatibus!',
// 	nameImg: 'product-11.jpg',
// 	reviewQuantity: 30,
// 	rating: 3.8,
// 	sold: 70,
// 	discount: 0,
// });
// InsertData.createProduct({
// 	name: 'Перец острый',
// 	categoryName: 'Овощи',
// 	price: 499.9,
// 	stocks: 360,
// 	unit: 'кг',
// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci ipsum distinctio, asperiores in voluptate, nulla at, commodi tenetur ea laboriosam sequi dolore labore! In rem eum accusamus perspiciatis. Necessitatibus!',
// 	nameImg: 'product-12.jpg',
// 	reviewQuantity: 27,
// 	rating: 4.8,
// 	sold: 50,
// 	discount: 0,
// });

class InsertData {

	static createCategory = async ({ name, value }) => {
		const category = new Category({
			name,
			value
		});

		await category.save();
	}

	static createProduct = async ({ name, categoryName, price, stocks, unit, description,
		nameImg, reviewQuantity, rating, sold, discount }) => {
		const category = (await Category.findOne({ name: categoryName })).toObject();

		const product = new Product({
			name,
			categoryId: category._id,
			price,
			stocks,
			unit,
			description,
			imageUrl: path.join('/', 'images', nameImg),
			reviewQuantity,
			rating,
			sold,
			discount,
		})

		product.save();
	}
}

module.exports = InsertData;