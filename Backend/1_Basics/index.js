require('dotenv').config()
const express = require('express')

const app = express();

const port = 4000;

app.get('/', (req,res) => {
    res.send("Backend started...")
})

app.get('/git', (req,res) => {
    res.send("<h1>Now i can add anything</h1>")
})

app.listen(process.env.port, () => {
    console.log(`Exapmle app listen on port ${port}`)
})