const mongoose = require("./connection");

const { Schema, model } = mongoose;

const goalsSchema = new Schema({
    goal: String,
    date: String,
    deadline: String,
    achieved: Boolean
});

const Goal = model("Goal", goalsSchema);

module.exports = Goal;