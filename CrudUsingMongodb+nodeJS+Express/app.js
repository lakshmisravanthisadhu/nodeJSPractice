const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Bank'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const CustomerRouter = require('./routes/customers')
app.use('/customers',CustomerRouter)

app.listen(8080, () => {
    console.log('Server started')
})