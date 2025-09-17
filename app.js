require('dotenv').config();

const express = require('express');
const config = require('./config');
const path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');


const app = express();

// Body parser
app.use(express.json({ extended: true }));

// Security headers (Helmet)
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
	directives: {
		defaultSrc: ["'self'", "https://yandex.ru *.yandex.ru", "https://yandex.net *.yandex.net", "https://yastatic.net *.yastatic.net"],
		fontSrc: ["'self' https: data:"],
		imgSrc: ["'self' data:", "https://yandex.ru *.yandex.ru", "https://yandex.net *.yandex.net"],
		styleSrc: ["'self' https: 'unsafe-inline'"],
	},
}));


// Compression
app.use(compression());

// Static files
app.use('/images', express.static(path.join(__dirname, 'images')));

// CORS
app.use(
  cors({
    origin: 'http://localhost:4200',
    credentials: true,
  })
);

// API routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/product', require('./routes/product.routes'));
app.use('/api/products', require('./routes/products.routes'));
app.use('/api/category', require('./routes/category.routes'));
app.use('/api/cart', require('./routes/cart.routes'));
app.use('/api/favorites', require('./routes/favorites.routes'));
app.use('/api/profile', require('./routes/profile.routes'));
app.use('/api/order', require('./routes/order.routes'));
app.use('/api/orders', require('./routes/orders.routes'));

// Health check
app.get('/healthz', (_req, res) => res.status(200).send('ok'));

if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'client', 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
	});
}

const PORT = config.PORT || 5001;

if (!config.MONGO_URI) {
  console.error('❌ Missing MONGO_URI in .env file');
  process.exit(1);
}

async function start() {
  try {
    // Mongoose v6+ needs no extra options
    await mongoose.connect(config.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

    const server = app.listen(PORT, () =>
      console.log(`App started on port ${PORT}…`)
    );

    // graceful shutdown
    const shutdown = (sig) => {
      console.log(`${sig} received. Closing server…`);
      server.close(() => {
        mongoose.connection.close(false).then(() => {
          console.log('Mongo connection closed. Bye!');
          process.exit(0);
        });
      });
    };
    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
  } catch (err) {
    console.error('Server error:', err);
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