// IMPORTING FILES & PACKAGES=========================================================
require("dotenv").config();
const mongoose = require('mongoose');

//Database Connection

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//Establish
mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
    .on('open', () => console.log('I\'m gonna get myself connected'))
    .on('close', () => console.log('I ain\'t gonna go blind'))
    .on('error', (error) => console.log(error));

module.exports = mongoose;
