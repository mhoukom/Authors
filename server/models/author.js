const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 characters, the entry '{VALUE}' is less than 3 characters"]
    }

}, {timestamps: true})

// make schema & export
const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;