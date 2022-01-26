const mongoose = require("mongoose")

var battleSchema = new mongoose.Schema({
    battle_name:{ type: String},
    year: { type: Number},
    attacker_king: { type: String},
    defender_king: { type: String},
    battle_type: { type: String},
    winner: { type: String},
    location: { type: String},
    region: { type: String}
});


module.exports = mongoose.model("Battle", battleSchema)