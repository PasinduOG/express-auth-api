# Express MySQL Authentication API

<div align="start">
  <img src="https://img.shields.io/badge/express-v5.1.0-green" alt="Express Version" />
  <img src="https://img.shields.io/badge/sequelize-v6.37.7-blue" alt="Sequelize Version" />
  <img src="https://img.shields.io/badge/mysql2-v3.14.1-orange" alt="MySQL2 Version" />
  <img src="https://img.shields.io/badge/bcryptjs-v3.0.2-purple" alt="bcryptjs Version" />
  <img src="https://img.shields.io/badge/license-MIT-yellow" alt="License" />
</div><br/>

<p align="start">
  A RESTful API for user authentication built with Express.js and MySQL, featuring secure password hashing with bcryptjs.
</p>

## 📋 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Example Requests](#-example-requests)
- [Database Schema](#-database-schema)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

- 🔐 Secure user registration
- 🔒 Password hashing with bcryptjs
- 📦 MVC architecture
- 🔄 MySQL database integration with Sequelize ORM

## 📂 Project Structure

```
express-auth-api/
├── config/
│   └── db.js             // Database connection configuration
├── controllers/
│   └── userController.js // User authentication logic
├── models/
│   └── User.js           // User database model
├── routes/
│   └── userRoutes.js     // API route definitions
├── server.js             // Express server setup
├── package.json          // Project dependencies
├── LICENSE               // MIT license
└── README.md             // Project documentation
```

## 🛠 Technologies Used

- **[Express.js](https://expressjs.com/) v5.1.0** - Fast, unopinionated web framework for Node.js
- **[Sequelize](https://sequelize.org/) v6.37.7** - Modern ORM for MySQL
- **[MySQL2](https://github.com/sidorares/node-mysql2) v3.14.1** - MySQL client for Node.js
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js) v3.0.2** - Password hashing function
- **[dotenv](https://github.com/motdotla/dotenv) v16.5.0** - Environment variable management
- **[body-parser](https://github.com/expressjs/body-parser) v2.2.0** - Request body parsing middleware

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PasinduOG/express-auth-api.git
   cd express-auth-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your MySQL database**
   ```sql
   CREATE DATABASE express_auth;
   ```

4. **Configure environment variables**
   - Create a `.env` file in the root directory
   - Add your database credentials (see Environment Variables section)

5. **Start the server**
   ```bash
   node server.js
   ```
   
6. **Test the API**
   - The server will start at http://localhost:3000
   - Use Postman or any API client to test the endpoints

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=express_auth
```

## 🌐 API Endpoints

| Method | Endpoint            | Description           | Request Body                               |
|--------|---------------------|-----------------------|-------------------------------------------|
| POST   | `/api/users/register` | Register a new user   | `{ username, email, password }`            |

## 📝 Example Requests

### Register a User

```http
POST /api/users/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

**Success Response:**
```json
"User registered!"
```

## 📊 Database Schema

### Users Table

| Column    | Type         | Constraints            |
|-----------|--------------|------------------------|
| id        | INT          | PRIMARY KEY, AUTO_INCREMENT |
| username  | VARCHAR(255) | UNIQUE                 |
| email     | VARCHAR(255) | UNIQUE                 |
| password  | VARCHAR(255) |                        |
| createdAt | DATETIME     |                        |
| updatedAt | DATETIME     |                        |

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Pasindu Madhuwantha - [@PasinduOG](https://github.com/PasinduOG)

---

<div align="center">
  <p>
    © 2025 Pasindu Madhuwantha. All rights reserved.
  </p>
</div>
