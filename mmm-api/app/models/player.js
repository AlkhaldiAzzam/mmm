// Require necessary NPM Packages
const mongoose = require('mongoose');

// Define Player Schema
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {
        timestamps: true
    });

// Compile model based on the schema
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;