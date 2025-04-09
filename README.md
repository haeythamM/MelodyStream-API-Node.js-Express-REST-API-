# 🎵 MelodyStream API

Welcome to the MelodyStream API! This is a RESTful API for managing music content such as albums, songs, singers, instruments, and more. This API is designed for educational purposes and is built with Node.js, Express, MySQL, and documented with Swagger (OpenAPI 3).

---

## 🧱 Project Structure

```
Assignment-number-3-API/
├── docs/
│   └── openapi.yaml           # Swagger/OpenAPI spec
├── routes/                    # Express routes for endpoints
│   ├── albums.js
│   ├── songs.js
│   ├── singers.js
│   ├── salesManagers.js
│   ├── instruments.js
│   ├── instrumentalists.js
│   └── songSingers.js
├── music_api_database_dump.sql  # 📦 MySQL database file
├── server.js                  # Main Express server file
├── .env                       # Environment variables (excluded by .gitignore)
├── .gitignore
├── package.json
└── README.md                  # This file
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/haeythamM/Assignment-number-3-API.git
cd Assignment-number-3-API
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server (Dev Mode)
```bash
# Starts using nodemon
nodemon server.js
```
Or (Production Mode):
```bash
node server.js
```

---

## 🌐 API Base URL
```
http://localhost:3001/api
```

---

## 🔁 Sample Endpoints

| Method | Endpoint                 | Description                     |
|--------|--------------------------|---------------------------------|
| GET    | `/api/albums`           | Get all albums                  |
| GET    | `/api/songs`            | Get all songs                   |
| GET    | `/api/singers`          | Get all singers                 |
| GET    | `/api/song-singers`     | Get all song-singer relationships |
| GET    | `/api/sales-managers`   | Get all sales managers          |
| GET    | `/api/instruments`      | Get all instruments             |
| GET    | `/api/instrumentalists` | Get all instrumentalists        |
| POST   | `/api/songs`            | Add a new song                  |
| POST   | `/api/singers`          | Add a new singer                |
| POST   | `/api/song-singers`     | Link a singer to a song         |

---

## 📄 Swagger API Documentation

### 🔗 URL to access Swagger UI:
```
http://localhost:3001/api-docs
```

### 📂 How it Works:
- The Swagger documentation is served from the YAML file located at `docs/openapi.yaml`.
- You can view, test, and understand all API endpoints through the Swagger interface.
- To enable Swagger, ensure you have the following in your `server.js`:
```js
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/openapi.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

---

## ✅ Application Home Page

When the server is running, visit the root URL:
```
http://localhost:3001/
```
You’ll see a message like:
```
🎵 Music API is running!
```
This confirms the app is working correctly.

---

## 🗃️ MySQL Database Setup

- A sample SQL dump file is provided:
  - `music_api_database_dump.sql`
- You can import this file into tools like **DBeaver**, **phpMyAdmin**, or MySQL CLI:

```bash
mysql -u your_username -p music_db < music_api_database_dump.sql
```

Make sure your `.env` file matches your DB credentials:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=music_db
```

---

## 💬 Contact
**Project Author:** Haeytham M.
Feel free to open an issue or fork the project if you'd like to contribute.

---

© 2025 MelodyStream. All rights reserved.
