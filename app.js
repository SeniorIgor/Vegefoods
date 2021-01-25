const express = require('express');
const config = require('./config');
const path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(express.json({ exended: true }));

app.use(helmet.contentSecurityPolicy({
	directives: {
		defaultSrc: ["'self'", "https://yandex.ru *.yandex.ru", "https://yandex.net *.yandex.net", "https://yastatic.net *.yastatic.net"],
		fontSrc: ["'self' https: data:"],
		imgSrc: ["'self' data:", "https://yandex.ru *.yandex.ru", "https://yandex.net *.yandex.net"],
		styleSrc: ["'self' https: 'unsafe-inline'"],
	},
}));
app.use(compression());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(cors({ origin: "http://localhost:4200" }));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/product', require('./routes/product.routes'));
app.use('/api/products', require('./routes/products.routes'));
app.use('/api/category', require('./routes/category.routes'));
app.use('/api/cart', require('./routes/cart.routes'));
app.use('/api/favorites', require('./routes/favorites.routes'));
app.use('/api/profile', require('./routes/profile.routes'));
app.use('/api/order', require('./routes/order.routes'));
app.use('/api/orders', require('./routes/orders.routes'));

if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'client', 'dist')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
	})
}

const PORT = config.PORT || 5000;

async function start() {
	try {
		await mongoose.connect(config.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		});

		app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));

	} catch (err) {
		console.log('Server error', err.message);
		process.exit(1);
	}
}

start();


// "client:install": "npm install --prefix client",
// "client:build": "npm run build --prefix client",
// "heroku:config": "heroku config:set NPM_CONFIG_PRODUCTION=false",
// "heroku:build": "webpack -p --config ./webpack.prod.config.js --progress",
// "client:heroku": "cd client && npm run heroku:config && npm install && npm run heroku:build",
// "heroku-postbuild": "npm run client:heroku",