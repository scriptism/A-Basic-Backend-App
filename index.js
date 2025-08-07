const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('./database.db');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (like your HTML form)
app.use(express.static(path.join(__dirname, 'public')));

// Create table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  email TEXT NOT NULL
)`);

// Handle form submission
app.post('/submit', (req, res) => {
  const { username, email } = req.body;
  db.run('INSERT INTO users (username, email) VALUES (?, ?)', [username, email], function(err) {
    if (err) {
      return res.status(500).send('Database error');
    }
    res.send('Data received and stored!');
  });
});

// Route to display all users
app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      return res.status(500).send('Database error');
    }
    res.json(rows);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});