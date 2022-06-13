const express = require('express')
const app = express()
const mysql = require('mysql')

mysql.createConnection({
    user: ''
})

app.get('/', function (req, res) {
    res.send('Hello World' + req.params.)
})

app.listen(3000)