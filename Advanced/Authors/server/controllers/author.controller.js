
const { response, request } = require('express');
const { Author } = require('../models/author.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createAuthor = (request, response) => {
    const { userName} = request.body;
    Author.create({
        userName
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllAuthors = (request, response) =>{
    Author.find({})
    .then(authors => response.json(authors))
    .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err))
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id: request.params.id}, request.body, {new: true})
        .then(getAuthor => response.json(getAuthor))
        .catch(err => response.json(err))
}






