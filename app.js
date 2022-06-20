const express = require('express')
const app = express()
const mysql = require('mysql')

let connection = mysql.createConnection({
    host: '10.10.0.9',
    port: 1521,
    user: 'C##SREITMANN18',
    password: ''
})

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

app.get('/', function (req, res) {
    res.send('Hello World' + req.params)
})

app.listen(3000)