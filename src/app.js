const express = require('express')
const app = express()

const index = require("./routes/indexRoute")
const tarefas = require('./routes/tarefasRoute')


app.use('/', index)
app.use('/tarefas', tarefas)


module.exports = app