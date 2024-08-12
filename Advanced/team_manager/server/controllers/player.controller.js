const { response, request } = require('express');
const {Player} = require('../models/player.model')


module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}


module.exports.createPlayer = (request, response) => {
    const {playerName , preferedPosition } = request.body;
    Player.create({
        playerName,
        preferedPosition,
    })
        .then(players => response.json(players))
        .catch(err => response.status(400).json(err));
}

module.exports.getPlayers = (request, response) => {
    Player.find({})
    .then(players => response.json(players))
    .catch(err => response.status(400).json(err))
}
module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
