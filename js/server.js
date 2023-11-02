console.log('its working')

const express = require('express')
const data = require('https://pokeapi.co/api/v2/pokemon/')

const server = express()

const cors = require('cors')

server.get('/', cors(), (require, response) => {
    response.send(data)
})

server.listen(3000, () => {
    console.log('finaly working')
})
/* const express = require('express');
const jsonData = require('./element.json')

const server = express();

const cors = require("cors")

server.get("/", cors(), (require, response) => {
    response.send(jsonData) // i can also send a JSON FILE
    // With express I dont need to tell the response to end
    
})
server.listen(3000, () => {
    console.log("the server is working")
}) */