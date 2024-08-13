const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

app.get('/employees', (req, res) => {
    db.query('SELECT * FROM Employees', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/employees', (req, res) => {
    const { FullName, Subdivision, Position, Status, PeoplePartner, OutOfOfficeBalance, Photo } = req.body;
    db.query('INSERT INTO Employees SET ?', { FullName, Subdivision, Position, Status, PeoplePartner, OutOfOfficeBalance, Photo }, (err, result) => {
        if (err) throw err;
        res.send('Employee added.');
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
