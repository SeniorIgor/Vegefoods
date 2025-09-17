require('dotenv').config();
const mongoose = require('mongoose');
const Status = require('../models/Status');
const config = require('../config'); // make sure config.MONGO_URI points to your vegefoods DB

async function seedStatuses() {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");

    const statuses = [
      { name: 'Pending', orderPeriod: 1 },
      { name: 'Processing', orderPeriod: 2 },
      { name: 'Preparing', orderPeriod: 3 },
      { name: 'Out for Delivery', orderPeriod: 4 },
      { name: 'Delivered', orderPeriod: 5 },
    ];

    await Status.deleteMany({}); // clear old statuses
    await Status.insertMany(statuses);

    console.log("✅ Statuses seeded successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error seeding statuses:", err);
    mongoose.disconnect();
  }
}

seedStatuses();