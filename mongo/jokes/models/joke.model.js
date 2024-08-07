const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        requird: [true, "setup is required"],
        minlength : [4, "setup must be atleast 4 characters"]
    },
    punchline: {
        type: String,
        requird: [true, "punchline is required"],
        minlength : [4, "punchline must be atleast 4 characters"]
    }
});
 
const Joke = mongoose.model('joke', JokeSchema);
 
module.exports = Joke;
