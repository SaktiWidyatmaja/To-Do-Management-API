# Project: Node.js API with CRUD and User Authentication

## Description
This project is a Node.js-based RESTful API built with Express.js. It includes the following features:

1. CRUD operations for managing items.
2. User authentication and authorization using JWT (JSON Web Tokens).
3. Input validation and error handling.
4. Pagination for retrieving a list of items.
5. MongoDB for data storage.

The API allows users to register, log in, and perform CRUD operations on items while restricting access to authenticated users.

---

## Features

### 1. CRUD Operations for Items
- **POST /items**: Create a new item.
- **GET /items**: Retrieve a paginated list of items.
- **GET /items/:id**: Retrieve a specific item by its ID.
- **PUT /items/:id**: Update an item by its ID.
- **DELETE /items/:id**: Delete an item by its ID.

### 2. User Authentication
- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Log in a user to obtain a JWT token.
- **GET /auth/profile**: Access the authenticated user's profile (protected route).

### 3. Input Validation and Error Handling
- Validation using `Joi` or `express-validator`.
- Centralized error handling for consistent responses.

### 4. Pagination for Items
- Specify `page` and `limit` query parameters for paginated retrieval.

---

## Requirements

### Technologies
- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT (jsonwebtoken)**
- **bcrypt.js**

### Prerequisites
- Node.js and npm installed.
- MongoDB instance running locally or in the cloud.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/nodejs-api-project.git
   cd nodejs-api-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

---

## API Documentation

### User Authentication

#### Register
- **Endpoint**: `POST /auth/register`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully"
  }
  ```

#### Login
- **Endpoint**: `POST /auth/login`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "jwt_token_here"
  }
  ```

#### Profile
- **Endpoint**: `GET /auth/profile`
- **Headers**:
  ```
  Authorization: Bearer <jwt_token>
  ```
- **Response**:
  ```json
  {
    "_id": "user_id",
    "email": "user@example.com",
    "createdAt": "2023-01-01T00:00:00.000Z"
  }
  ```

### Items

#### Create Item
- **Endpoint**: `POST /items`
- **Headers**:
  ```
  Authorization: Bearer <jwt_token>
  ```
- **Body**:
  ```json
  {
    "name": "Item Name",
    "description": "Item Description",
    "status": "pending"
  }
  ```
- **Response**:
  ```json
  {
    "_id": "item_id",
    "name": "Item Name",
    "description": "Item Description",
    "status": "pending",
    "userId": "user_id"
  }
  ```

#### Get Items (Paginated)
- **Endpoint**: `GET /items`
- **Query Parameters**:
  - `page`: Page number (default: 1).
  - `limit`: Number of items per page (default: 10).
- **Response**:
  ```json
  {
    "items": [
      { "_id": "item_id", "name": "Item Name", "description": "Item Description" }
    ],
    "total": 100,
    "page": 1,
    "totalPages": 10
  }
  ```

#### Get Item by ID
- **Endpoint**: `GET /items/:id`
- **Headers**:
  ```
  Authorization: Bearer <jwt_token>
  ```
- **Response**:
  ```json
  {
    "_id": "item_id",
    "name": "Item Name",
    "description": "Item Description",
    "status": "pending"
  }
  ```

#### Update Item
- **Endpoint**: `PUT /items/:id`
- **Headers**:
  ```
  Authorization: Bearer <jwt_token>
  ```
- **Body**:
  ```json
  {
    "name": "Updated Name",
    "description": "Updated Description",
    "status": "completed"
  }
  ```
- **Response**:
  ```json
  {
    "_id": "item_id",
    "name": "Updated Name",
    "description": "Updated Description",
    "status": "completed"
  }
  ```

#### Delete Item
- **Endpoint**: `DELETE /items/:id`
- **Headers**:
  ```
  Authorization: Bearer <jwt_token>
  ```
- **Response**:
  ```json
  {
    "message": "Item deleted successfully"
  }
  ```

---

## Testing the API
A Postman collection is included in the project under the tests folder for easier testing.

---
