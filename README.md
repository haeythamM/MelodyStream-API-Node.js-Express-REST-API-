# 🎵 MelodyStream API

A RESTful API built with Node.js and Express to manage musical content such as albums, songs, singers, and more.

## 📁 Project Structure

```
ASSIGNMENT-NUMBER-3-API/
│
├── config/                 # Database connection
│   └── db.js
│
├── controllers/           # API logic
│   ├── albumsController.js
│   ├── instrumentalistsController.js
│   ├── instrumentsController.js
│   ├── salesManagersController.js
│   ├── singersController.js
│   ├── songsController.js
│   └── songSingersController.js
│
├── routes/                # Route definitions
│   ├── albums.js
│   ├── instrumentalists.js
│   ├── instruments.js
│   ├── salesManagers.js
│   ├── singers.js
│   ├── songs.js
│   └── songSingers.js
│
├── docs/                  # Swagger YAML file
│   └── openapi.yaml
│
├── .env                   # Environment variables
├── .gitignore
├── music_api_database_dump.sql  # SQL file to import in DBeaver or MySQL
├── package.json
├── server.js
└── README.md              # This file
```

## 🛠️ Installation and Setup

1. **Clone the repository**
```bash
git clone https://github.com/haeythamM/Assignment-number-3-API.git
cd Assignment-number-3-API
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**
Create a `.env` file with the following:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=music_api
PORT=3001
```

4. **Start the server**
```bash
npm run dev  
# Starts using nodemon
nodemon server.js
```

5. **Access the API**
Open: `http://localhost:3001/api/albums`

6. **View Swagger Docs**
Open: `http://localhost:3001/api-docs`

---

## 🧪 Endpoints

| Method | Endpoint              | Description                       |
|--------|-----------------------|-----------------------------------|
| GET    | /api/albums           | Get all albums                    |
| POST   | /api/albums           | Add a new album                   |
| GET    | /api/songs            | Get all songs                     |
| POST   | /api/songs            | Add a new song                    |
| GET    | /api/singers          | Get all singers                   |
| POST   | /api/singers          | Add a new singer                  |
| GET    | /api/song-singers     | View song-singer links            |
| POST   | /api/song-singers     | Link singer to song               |
| GET    | /api/instruments      | List instruments                  |
| GET    | /api/sales-managers   | List sales managers               |
| GET    | /api/instrumentalists | List instrumentalists             |

---

## 🧩 Database

- **File:** `music_api_database_dump.sql`
- **Usage:** You can import this file into any database tool like DBeaver or MySQL Workbench to set up your database.

---

## 🔧 Tools Used

- Node.js
- Express.js
- MySQL2
- dotenv
- Swagger (OpenAPI 3.0)
- CORS
- Nodemon

---

## 📜 License

All rights reserved © Haeytham
