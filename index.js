const { response } = require('express')
const http = require('http')

/*Maso aca importo un json con letras del duketo*/
const quotes =require("./lyrics.json")
/* Acá tiro un random para que eliga al azar alguna barra*/
const dukoQuote = quotes[Math.floor(Math.random() * quotes.length)]

const app = http.createServer((request, response) =>{
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(dukoQuote))
})

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`El servidor esta levantado en el puerto ${PORT}`)