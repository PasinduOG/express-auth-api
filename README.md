# Express MySQL Authentication API

<div align="start">
  <img src="https://img.shields.io/badge/express-v5.1.0-green" alt="Express Version" />
  <img src="https://img.shields.io/badge/sequelize-v6.37.7-blue" alt="Sequelize Version" />
  <img src="https://img.shields.io/badge/mysql2-v3.14.1-orange" alt="MySQL2 Version" />
  <img src="https://img.shields.io/badge/license-MIT-yellow" alt="License" />
</div><br/>

<p align="start">
  A robust RESTful API for user authentication built with Express.js and MySQL, featuring secure password hashing and a clean architecture.
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
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

- 🔐 Secure user registration and authentication
- 🔒 Password hashing with bcrypt
- 📦 Clean MVC architecture
- 🔄 MySQL database integration with Sequelize ORM
- 📝 Well-organized codebase for easy maintenance and scalability

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
├── knexfile.js           // Knex configuration
├── server.js             // Express server setup
├── package.json          // Project dependencies
└── README.md             // Project documentation
```

## 🛠 Technologies Used

- **[Express.js](https://expressjs.com/)** - Fast, unopinionated, minimalist web framework for Node.js
- **[Sequelize](https://sequelize.org/)** - Modern TypeScript and Node.js ORM for MySQL
- **[MySQL2](https://github.com/sidorares/node-mysql2)** - MySQL client for Node.js with focus on performance
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)** - Password hashing function
- **[dotenv](https://github.com/motdotla/dotenv)** - Environment variable management

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
   npm start
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
PORT=3000
```

## 🌐 API Endpoints

| Method | Endpoint            | Description           | Request Body                                    |
|--------|---------------------|-----------------------|------------------------------------------------|
| POST   | `/api/users/register` | Register a new user   | `{ username, email, password }`                 |

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
{
  "message": "User registered successfully",
  "userId": 1
}
```

## 📊 Database Schema

### Users Table

| Column    | Type         | Constraints            |
|-----------|--------------|------------------------|
| id        | INT          | PRIMARY KEY, AUTO_INCREMENT |
| username  | VARCHAR(255) | UNIQUE, NOT NULL       |
| email     | VARCHAR(255) | UNIQUE, NOT NULL       |
| password  | VARCHAR(255) | NOT NULL               |
| createdAt | DATETIME     | NOT NULL               |
| updatedAt | DATETIME     | NOT NULL               |

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Pasindu Madhuwantha - [@PasinduOG](https://github.com/PasinduOG)

Project Link: [https://github.com/PasinduOG/express-auth-api](https://github.com/PasinduOG/express-auth-api)

---

<div align="center">
  <p>
    If you found this project helpful, please consider giving it a ⭐!
  </p>
  <p>
    © 2025 Pasindu Madhuwantha. All rights reserved.
  </p>
</div>
