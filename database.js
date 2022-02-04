const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost',
    user     : 'root', 
    password : '',
    database : 'pos' 
}).promise();
module.exports = dbConnection;