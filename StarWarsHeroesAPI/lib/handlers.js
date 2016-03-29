var DataStore = require('./dataStore');
var Boom = require('boom');

var Handlers = {};

Handlers.getAllHeroes = function(request, reply) {
    DataStore.getAllHeroes(function(err, results) {
        if(err) {
            return reply(Boom.badImplementation(err.details[0].message));
        }
        reply(results[0]);
    });
}

Handlers.getHeroesByIntent = function(request, reply) {
    var good = request.params.good;
    DataStore.getHeroesByIntent(good, function(err, results) {
        if(err) {
            return reply(Boom.badImplementation(err.details[0].message));
        }
        reply(results[0]);
    });
}

Handlers.getHeroById = function(request, reply) {
    var heroId = request.params.heroId;
    DataStore.getHeroById(heroId, function(err, results) {
        if(err) {
            return reply(Boom.badImplementation(err.details[0].message));
        }
        reply(results[0][0]);
    });
}

module.exports = Handlers;