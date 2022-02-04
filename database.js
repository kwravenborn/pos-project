const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost',
    user     : 'root', 
    password : 'g4O1p7C22oh12',
    database : 'POS' 
}).promise();
module.exports = dbConnection;