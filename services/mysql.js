const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'db4free.net',
    port: 3306,
    user: 'greeenpath',
    password: 'greenpath',
    database: 'greeenpath'
});

const query = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

module.exports = {
    query,
    // You can also export the connection object if you need to use it directly
    connection
};
