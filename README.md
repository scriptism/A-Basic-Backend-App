⁸# Server Cursor

A simple Express.js server with SQLite database for form handling.

## Features

- Express.js web server
- SQLite database for data storage
- Form submission handling
- User data display endpoint

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/scriptism/A-Basic-Backend-App.git
   cd server_cursor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the server**
   ```bash
   node index.js
   ```

4. **Access the application**
   - Form: http://localhost:3000/form.html
   - Users data: http://localhost:3000/users

## Database

The application uses SQLite with a local database file (`database.db`). The database will be created automatically when you first run the application.

## API Endpoints

- `POST /submit` - Submit form data (username, email)
- `GET /users` - Get all users from database

## Project Structure

```
server_cursor/
├── index.js          # Main server file
├── database.db       # SQLite database (created automatically)
├── package.json      # Dependencies
├── public/           # Static files
│   └── form.html     # HTML form
└── .gitignore        # Git ignore rules
```
