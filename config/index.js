module.exports = {
  PORT: process.env.PORT || 5001,
  JWT_SECRET: process.env.JWT_SECRET || 'change-me',
  MONGO_URI: process.env.MONGO_URI, // required
  BASE_URL: process.env.BASE_URL || `http://localhost:${process.env.PORT || 5001}`,
  CATEGORY_ALL: process.env.CATEGORY_ALL || 'All'
};