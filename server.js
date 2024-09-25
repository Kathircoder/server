const express = require('express')
const dbconnect=require('./config/db.js')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 7777

app.use(express.json())
app.get('/', (req, res) => {
    res.json({ message: "Welcome" })
})

app.listen(port, () => {
    console.log(`server is running in port : ${port}`)
})
