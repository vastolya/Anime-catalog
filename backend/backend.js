const express = require('express')
const app = express()
const PORT = 5000
const dataBaseJson = require('./db.json') // импорт локальной бд

app.get("/api", (req, res) => {
    res.json(dataBaseJson)
})

app.listen(PORT, () => { console.log("Server live on " + PORT)})