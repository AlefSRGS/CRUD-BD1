const express = require('express')
const routes = require('./routes')
const app =  express()

require('./database')

app.use(express.json())
app.use(routes)

const port = '';

app.listen(3000, () => console.log('Rodando na porta...'))