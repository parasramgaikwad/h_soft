var mysql = require('mysql')

var util = require('util')

var conn = mysql.createConnection({
    host: "botlicmhdrg8sjrjiuut-mysql.services.clever-cloud.com",
    user: "ujipwxoawh7qy53p",
    password: "Sp926HxRl3I2BtSKrp7C",
    database: "botlicmhdrg8sjrjiuut"
})

var exe = util.promisify(conn.query).bind(conn)

module.exports = exe
