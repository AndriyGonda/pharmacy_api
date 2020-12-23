'use strict'
const express = require('express');
const {PORT} = require('./config')

const port = PORT || 5000

const app = express()
app.use(express.json())

app.listen(port, () => {
    console.log(`Application running on port ${port}`)
})