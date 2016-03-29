var sql = require('mssql');

var DataStore = {};

var user = process.env.DBUser || 'nodetest';
var password = process.env.DBPassword || 'dilbertDU1';
var server = process.env.DBServer || 'dlzkf4c7es.database.windows.net';

var config = {
    user: user,
    password: password,
    server: server,
    database: 'StarWarsHeroesDB',
    options: {
        encrypt: true
    }
};

DataStore.getAllHeroes = function(callback) {
    var connection = new sql.Connection(config, function(err) {
        if(err) {
            console.log('Error: ' + err);
            callback(err);
        }
        else {
            var request = new sql.Request(connection);
            request.execute('AllHeroes', function(err, recordsets) {
                if(err) {
                    console.log('Error: ' + err);
                    callback(err);
                }
                else {
                    console.dir(recordsets);
                    callback(null, recordsets);
                }
            });
        }
    });
    
    connection.on('error', function(err) {
        console.log('Error: ' + err);
    });
}

DataStore.getHeroesByIntent = function(good, callback) {
    var connection = new sql.Connection(config, function(err) {
        if(err) {
            console.log('Error: ' + err);
            callback(err);
        }
        else {
            var request = new sql.Request(connection);
            request.input('good', sql.Bit, good);
            request.execute('HeroesByIntent', function(err, recordsets) {
                if(err) {
                    console.log('Error: ' + err);
                    callback(err);
                }
                else {
                    console.dir(recordsets);
                    callback(null, recordsets);
                }
            });
        }
    });
    
    connection.on('error', function(err) {
        console.log('Error: ' + err);
    });
}

DataStore.getHeroById = function(heroId, callback) {
    var connection = new sql.Connection(config, function(err) {
        if(err) {
            console.log('Error: ' + err);
            callback(err);
        }
        else {
            var request = new sql.Request(connection);
            request.input('heroId', sql.Bit, heroId);
            request.execute('HeroById', function(err, recordsets) {
                if(err) {
                    console.log('Error: ' + err);
                    callback(err);
                }
                else {
                    console.dir(recordsets);
                    callback(null, recordsets);
                }
            });
        }
    });
    
    connection.on('error', function(err) {
        console.log('Error: ' + err);
    });
}

module.exports = DataStore;