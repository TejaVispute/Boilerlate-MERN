const mongoose = require('mongoose');

// creating schema for user details
const userDetails = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    }

})


const User = mongoose.model("detail", userDetails)

module.exports = User;