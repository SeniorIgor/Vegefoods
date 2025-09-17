// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const InsertData = require('../models/InsertData');

// Optional: fail fast on unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION:', err);
  process.exit(1);
});

async function runSeeder() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MONGO_URI is missing (check your .env)');

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // ---- OPTIONAL: wipe existing data (comment out if you want to keep data)
    const db = mongoose.connection.db;
    await db.dropCollection('categories').catch(() => {});
    await db.dropCollection('products').catch(() => {});
    console.log('🧹 Cleared categories & products');

    // ---- Categories
    await InsertData.createCategory({ name: 'Vegetables', value: 'vegetables' });
    await InsertData.createCategory({ name: 'Fruits', value: 'fruits' });
    await InsertData.createCategory({ name: 'Drinks', value: 'drinks' });

    // ---- Products
    await InsertData.createProduct({
      name: 'Bell Pepper',
      categoryName: 'Vegetables',
      price: 150,
      stocks: 600,
      unit: 'kg',
      description: 'Crisp, sweet bell peppers perfect for salads, sautés, and stuffing.',
      nameImg: 'product-1.jpg',
      reviewQuantity: 275,
      rating: 4.5,
      sold: 400,
      discount: 40,
    });

    await InsertData.createProduct({
      name: 'Strawberries',
      categoryName: 'Fruits',
      price: 250,
      stocks: 200,
      unit: 'kg',
      description: 'Juicy, fragrant berries ideal for desserts, smoothies, and snacks.',
      nameImg: 'product-2.jpg',
      reviewQuantity: 195,
      rating: 4.5,
      sold: 400,
      discount: 0,
    });

    await InsertData.createProduct({
      name: 'Green Beans',
      categoryName: 'Vegetables',
      price: 90,
      stocks: 150,
      unit: 'kg',
      description: 'Tender green beans great for steaming, stir-fries, and side dishes.',
      nameImg: 'product-3.jpg',
      reviewQuantity: 205,
      rating: 3.8,
      sold: 400,
      discount: 0,
    });

    await InsertData.createProduct({
      name: 'Cauliflower',
      categoryName: 'Vegetables',
      price: 120,
      stocks: 300,
      unit: 'kg',
      description: 'Fresh cauliflower for roasting, mashing, or low-carb rice alternatives.',
      nameImg: 'product-4.jpg',
      reviewQuantity: 205,
      rating: 4.5,
      sold: 350,
      discount: 15,
    });

    await InsertData.createProduct({
      name: 'Vine Tomatoes',
      categoryName: 'Vegetables',
      price: 139.9,
      stocks: 400,
      unit: 'kg',
      description: 'Aromatic tomatoes ripened on the vine; perfect for salads and sauces.',
      nameImg: 'product-5.jpg',
      reviewQuantity: 305,
      rating: 4.3,
      sold: 350,
      discount: 0,
    });

    await InsertData.createProduct({
      name: 'Broccoli',
      categoryName: 'Vegetables',
      price: 319.9,
      stocks: 200,
      unit: 'kg',
      description: 'Crisp florets rich in vitamins; ideal for steaming and roasting.',
      nameImg: 'product-6.jpg',
      reviewQuantity: 270,
      rating: 5,
      sold: 270,
      discount: 5,
    });

    await InsertData.createProduct({
      name: 'Washed Carrots',
      categoryName: 'Vegetables',
      price: 59.9,
      stocks: 300,
      unit: 'kg',
      description: 'Sweet, ready-to-use carrots for soups, salads, and snacks.',
      nameImg: 'product-7.jpg',
      reviewQuantity: 150,
      rating: 4.6,
      sold: 160,
      discount: 0,
    });

    await InsertData.createProduct({
      name: 'Fruit Nectar',
      categoryName: 'Drinks',
      price: 399.9,
      stocks: 600,
      unit: 'pcs',
      description: 'Refreshing fruit nectar beverage; serve chilled.',
      nameImg: 'product-8.jpg',
      reviewQuantity: 230,
      rating: 4.7,
      sold: 470,
      discount: 20,
    });

    await InsertData.createProduct({
      name: 'Red Onion',
      categoryName: 'Vegetables',
      price: 59.9,
      stocks: 200,
      unit: 'kg',
      description: 'Mild, slightly sweet onions perfect for salads and pickling.',
      nameImg: 'product-9.jpg',
      reviewQuantity: 140,
      rating: 4.5,
      sold: 270,
      discount: 0,
    });

    await InsertData.createProduct({
      name: 'Mixed Apples',
      categoryName: 'Fruits',
      price: 69.9,
      stocks: 450,
      unit: 'kg',
      description: 'A selection of crisp, juicy apples—great for snacking and baking.',
      nameImg: 'product-10.jpg',
      reviewQuantity: 120,
      rating: 4.2,
      sold: 360,
      discount: 0,
    });

    await InsertData.createProduct({
      name: 'Farm Garlic',
      categoryName: 'Vegetables',
      price: 59.9,
      stocks: 300,
      unit: 'pcs',
      description: 'Aromatic garlic bulbs to enhance sauces, roasts, and marinades.',
      nameImg: 'product-11.jpg',
      reviewQuantity: 30,
      rating: 3.8,
      sold: 70,
      discount: 0,
    });

    await InsertData.createProduct({
      name: 'Hot Chili Pepper',
      categoryName: 'Vegetables',
      price: 499.9,
      stocks: 360,
      unit: 'kg',
      description: 'Spicy chilies to add heat to salsas, stews, and marinades.',
      nameImg: 'product-12.jpg',
      reviewQuantity: 27,
      rating: 4.8,
      sold: 50,
      discount: 0,
    });

    console.log('✅ Data inserted successfully!');
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('❌ Error inserting data:', err);
    await mongoose.disconnect();
    process.exit(1);
  }
}

runSeeder();