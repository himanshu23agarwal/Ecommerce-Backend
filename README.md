# Ecommerce Backend

This is a backend system for an e-commerce application built using Node.js, Express, and MongoDB.

## Features
- User registration and login with JWT authentication
- Role-based access (Admin & User)
- Product management (Create, Update, Delete)
- Order management system
- Protected routes using middleware

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)

## API Endpoints

### User
- POST /api/users/register
- POST /api/users/login

### Products
- GET /api/products
- POST /api/products (Admin)
- PUT /api/products/:id (Admin)
- DELETE /api/products/:id (Admin)

### Orders
- POST /api/orders
- GET /api/orders/myorders
- GET /api/orders (Admin)

## How to Run

1. Clone the repo
2. Install dependencies:
   npm install
3. Create a .env file and add:
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret
4. Run server:
   npm run dev

## Testing

All APIs tested using Postman
