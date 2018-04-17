var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback)
{
    var query = 'SELECT * FROM account;';

    connection.query(query, function(err, result)
    {
        callback(err, result);
    });
};
exports.insert = function(params, callback)
{
    var query = 'INSERT INTO account (email, f_name, l_name) VALUES (?,?,?)';

    var queryData = [params.email, params.f_name, params.l_name];

    connection.query(query, queryData, function(err, result)
    {
        callback(err, result);
    });
};