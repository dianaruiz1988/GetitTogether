
// IMPORTING FILES & PACKAGES=======================================================================================================
const express = require('express');
const res = require('express/lib/response');
const Journal = require("../models/journal");
const Goal = require("../models/goal");

// CREATE ROUTER====================================================================================================================
const router = express.Router();

//ROUTES:===========================================================================================================================

//SEED++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Journal Seed---------------------------------------------------------------------
router.get('/journals/seed', (req, res) => {
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

// Goal Seed---------------------------------------------------------------------
router.get('/goals/seed', (req, res) => {
    const startGoals = [
        {
            goal: "Get Quality Sleep",
            date: "3/11/22",
            deadline: "unrealistic",
            achieved: false,
        },

        {
            goal: "Take Zeke to the park more",
            date: "3/11/22",
            deadline: "3/16/22",
            achieved: true,
        },
    ];
    Goal.deleteMany({}).then((data) => {
        Goal.create(startGoals).then((data) => {
            res.json(data);
        })
    }).catch((err) => {
        res.status(400).send(err)
    })
})

//INDUCES===========================================================================

//INDEX+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.get('/journals', (req, res) => {
    Journal.find({})
        .then((journals) => {
            res.render("journals/Index", { journals })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// Goal Index------------------------------------------------------------------------
router.get('/goals', (req, res) => {
    Goal.find({})
        .then((goals) => {
            res.render("goals/Index", { goals })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

//NEW++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.get('/journals/new', (req, res) => {
    res.render('journals/New')
})

// Goal New--------------------------------------------------------------------------
router.get('/goals/new', (req, res) => {
    res.render('goals/New')
})


//DELETE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.delete ('/journals/:id',(req,res) => {
    const {id} = req.params;
    Journal.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/journals')
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
})

// Goal Delete--------------------------------------------------------------------------
router.delete ('/goals/:id',(req,res) => {
    const {id} = req.params;
    Goal.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/goals')
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
})


//UPDATE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.put('/journals/:id', (req, res) => {
    const id = req.params.id;
    req.body.brushTeeth = req.body.brushTeeth === 'on' ? true : false;
    req.body.washFace = req.body.washFace === 'on' ? true : false;
    req.body.eatMeal = req.body.eatMeal === 'on' ? true : false;
    req.body.getFreshAir = req.body.getFreshAir === 'on' ? true : false;
    req.body.drinkWater = req.body.drinkWater === 'on' ? true : false;

    Journal.findByIdAndUpdate(id, req.body, { new: true})
        .then(() => {
            res.redirect(`/journals/${id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// Goal Update--------------------------------------------------------------------------
router.put('/goals/:id', (req, res) => {
    const id = req.params.id;
    req.body.achieved = req.body.achieved === 'on' ? true : false;

    Goal.findByIdAndUpdate(id, req.body, { new: true})
        .then(() => {
            res.redirect(`/goals/${id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

//CREATE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.post('/journals', (req, res) => {
    req.body.brushTeeth = req.body.brushTeeth === 'on' ? true : false;
    req.body.washFace = req.body.washFace === 'on' ? true : false;
    req.body.eatMeal = req.body.eatMeal === 'on' ? true : false;
    req.body.getFreshAir = req.body.getFreshAir === 'on' ? true : false;
    req.body.drinkWater = req.body.drinkWater === 'on' ? true : false;

    Journal.create(req.body)
        .then((createdJournal) => {
            res.redirect(`/journals/${createdJournal._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// Goal Create--------------------------------------------------------------------------
router.post('/goals', (req, res) => {
    req.body.achieved = req.body.achieved === 'on' ? true : false;
  

    Goal.create(req.body)
        .then((createdGoal) => {
            res.redirect(`/goals/${createdGoal._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


//EDIT+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.get('/journals/:id/edit', (req, res) => {
    const { id } = req.params
    Journal.findById(id)
        .then((journal) => {
            res.render('journals/Edit', { journal })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

// Goal Create--------------------------------------------------------------------------
router.get('/goals/:id/edit', (req, res) => {
    const { id } = req.params
    Goal.findById(id)
        .then((goal) => {
            res.render('goals/Edit', { goal })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

//SHOW++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.get('/journals/:id', (req, res) => {
    const { id } = req.params;

    Journal.findById(id)
        .then((journal) => {
            res.render('journals/Show', { journal })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// Goal Show----------------------------------------------------------------------------
router.get('/goals/:id', (req, res) => {
    const { id } = req.params;

    Goal.findById(id)
        .then((goal) => {
            res.render('goals/Show', { goal })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


module.exports = router;