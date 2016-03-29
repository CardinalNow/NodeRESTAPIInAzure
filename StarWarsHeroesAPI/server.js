var Hapi = require('hapi');

var server = new Hapi.Server();

var port = process.env.port || 3000;

server.connection({port: port});

server.route(require('./lib/routes'));

server.start(function() {
    console.log('Listening on ' + server.info.uri);
});