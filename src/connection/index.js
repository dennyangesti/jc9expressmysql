const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        user: 'dennyangesti',
        password: 'kaskuser21',
        host: 'db4free.net',
        database: 'dennymysql',
        port: 3306
    }
)

module.exports = conn
