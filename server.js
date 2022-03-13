// IMPORTING FILES & PACKAGES====================================================================================================================
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const journalController = require('./controllers/main')
const path = require('path');

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

//MVC SETUP======================================================================================================================================

//Views

//Models

//MIDDLEWARE
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

//Routes
// app.use('/journals', journalController)
// app.get('/', (req, res) => {
//     res.send("will this be the home page");
// })

app.use('/main', journalController)
app.get('/', (req, res) => {
    res.send("will this be the home page");
})

//SERVER LISTENER

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));

