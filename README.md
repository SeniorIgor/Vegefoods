# Vegefoods

Vegefoods is an online shop for healthy foods, built with **React + Redux** on the frontend, and **Node.js + Express** + **MongoDB** on the backend. The app provides a full product catalog, user authentication, a shopping cart, and an API for managing products and orders.

**Live Demo:** https://vegefoods.herokuapp.com/

---

## Features

- Browse product catalog of healthy foods with images and categories
- User authentication and profile (login, register)
- Shopping cart with Redux state management
- Order placement and backend order API
- Backend serves both static React frontend and API from the same server
- MongoDB as data storage (products, users, orders)

---

## Tech Stack

**Frontend**

- React (with component architecture)
- Redux for global state management
- SCSS
- React Router for client-side routing

**Backend**

- Node.js + Express
- MongoDB (Mongoose ODM)
- REST API (`/products`, `/orders`, `/users`, etc.)
- Middleware for auth, error handling, input validation

---

## Project Structure

```
client/             # React app (components, pages, store, styles)
server/             # Express backend (routes, models, controllers)
models/             # Mongoose schemas (Product, User, Order, etc.)
routes/             # API endpoints
config/             # Environment config, DB connection
middleware/         # Authentication, error-handling
app.js / index.js   # Server entry point
```

---

## Setup

**Requirements:** Node 14, npm 6

```bash
# install dependencies
npm run app:install

# set environment variables
# e.g.
# MONGO_URI=your_mongo_connection_string
# BASE_URL
# JWT_SECRET=your_jwt_secret
# NODE_ENV=production (or development)
# PORT=5001
# CATEGORY_ALL

# run in dev mode (frontend + backend)
npm run dev

# build for production
npm run build
npm start
```

---

## Example API (Backend)

- `GET /api/products` → list all products
- `POST /api/orders` → create a new order (requires auth)
- `POST /api/users/login` → user authentication
- `GET /api/users/profile` → get user profile info

---

## Learning Outcomes

- Built a full MERN-stack application integrating React frontend with a MongoDB backend using Express.
- Designed and managed global state using Redux (actions, reducers), and handled async API calls.
- Implemented secure user auth (JWT), route protection, and proper separation of concerns.
- Learned to deploy a full-stack app (serving both frontend and backend from one server) and work with environment configuration.
- Gained experience in designing RESTful APIs, error handling, and database schema design.

---

## Next Steps & Improvements

- Add automated tests (unit + integration) for backend and frontend
- Improve product search and filtering capabilities
- Add image upload support and better media handling
- Enhance performance (lazy loading, code splitting) and optimize UI/UX
- Add CI/CD pipeline, monitoring, logging

---

## License

MIT
