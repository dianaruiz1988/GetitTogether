const mongoose = require("./connection");

const { Schema, model } = mongoose;

const journalsSchema = new Schema({
    date: String,
    title: String,
    grateful: String,
    affirmations: String,
    today: String,
    tomorrow: String,
    brushTeeth: Boolean,
    washFace: Boolean,
    eatMeal: Boolean,
    getFreshAir: Boolean,
    drinkWater: Boolean
});

const Journal = model("Journal", journalsSchema);

module.exports = Journal;


