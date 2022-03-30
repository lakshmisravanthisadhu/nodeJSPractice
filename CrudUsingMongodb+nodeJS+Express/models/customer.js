const mongoose = require('mongoose')


const CustomerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    AccountNumber: {
        type: Number,
        required: true,
    },
    AccountBalance:{
        type:Number,
        required:true,
    }

})

module.exports = mongoose.model('Customer',CustomerSchema)