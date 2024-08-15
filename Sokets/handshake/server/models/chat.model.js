const mongoose = require('mongoose');
const ChatSchema = new mongoose.Schema({
    Name: { type: String },
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);

