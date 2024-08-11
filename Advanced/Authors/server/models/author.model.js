const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    userName: { type: String,
                required: [true, "Name is reqired"],
                minlength: [3, "Name must be at least 3 charecters long "]
     },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);

