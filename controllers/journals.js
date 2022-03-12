
// IMPORTING FILES & PACKAGES=======================================================================================================
const express = require('express');
const res = require('express/lib/response');
const Journal = require("../models/journal");

// CREATE ROUTER====================================================================================================================
const router = express.Router();

//ROUTES:===========================================================================================================================

//SEED++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.get('/seed', (req, res) => {
    const startJournals = [
        {
            date: "3/11/22",
            title: "First Journal Entry",
            grateful: "grateful for family",
            affirmations: " I will do good on this project",
            today: "today I am grateful for opportunies heading my way",
            tomorrow: "tomorrow I will be grateful to have time to work on project",
            brushTeeth: true,
            washFace: true,
            eatMeal: true,
            getFreshAir: false,
            drinkWater: true,
        },
        {
            date: "3/12/22",
            title: "Second Journal Entry",
            grateful: "grateful for health",
            affirmations: " I will believe in myself",
            today: "today I am grateful for being able to work on the project",
            tomorrow: "tomorrow I will be grateful to have even more time",
            brushTeeth: true,
            washFace: true,
            eatMeal: true,
            getFreshAir: false,
            drinkWater: true,
        },
    ];
    Journal.deleteMany({}).then((data) => {
        Journal.create(startJournals).then((data) => {
            res.json(data);
        })
    }).catch((err) => {
        res.status(400).send(err)
    })
})

//INDUCES===========================================================================

//INDEX+++++++++++++++++++++++

router.get('/', (req, res) => {
    Journal.find({})
        .then((journals) => {
            res.render("journals/Index", { journals })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

//NEW++++++++++++++++++++

//DELETE++++++++++++++++++++

//UPDATE+++++++++++++++++++++++++++++++++++++++++++++++++

//CREATE++++++++++++++++++++++++++++++++++++++++++++++++

//EDIT+++++++++++++++++++++++++++++++++

//SHOW+++++++++++++++++++++++++++++

module.exports = router;