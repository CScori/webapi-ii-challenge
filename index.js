console.log("running!")
//sanity check valid

const express = require('express')
const db = require('./data/db')
//imports^
const server = express()
const port  = 3000
server.listen(port, () => console.log('posts running on 3000'))
server.use(express.json())
//server definition ^
