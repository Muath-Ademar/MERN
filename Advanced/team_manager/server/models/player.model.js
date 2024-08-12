const mongoose = require('mongoose')
const PlayerSchema = new mongoose.Schema({
    playerName: {type: String,
        required: [true, "Name is reqired"],
        minlength: [3, "Name must be at least 3 charecters long "]
    },
    preferedPosition: {type: String,
        required: [true, "Position is reqired"],
        minlength: [5, "Position must be at least 5 charecters long "]
    },

}, {timestamps: true})
module.exports.Player = mongoose.model('Player', PlayerSchema);