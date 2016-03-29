var Joi = require('joi');
var Handlers = require('./handlers');

var Routes = [
    {
        path: '/heroes',
        method: 'GET',
        handler: Handlers.getAllHeroes
    },
    {
        path: '/heroes/{good}',
        method: 'GET',
        handler: Handlers.getHeroesByIntent,
        config: {
            validate: {
                params: {
                    good: Joi.boolean()
                }
            }
        }
    },
    {
        path: '/hero/{heroId}',
        method: 'GET',
        handler: Handlers.getHeroById,
        config: {
            validate: {
                params: {
                    heroId: Joi.number().integer().min(1)
                }
            }
        }
    }
];

module.exports = Routes;