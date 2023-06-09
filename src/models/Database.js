const mysql = require('mysql');
class Database {
    constructor() {
        this.host = 'localhost';
        this.user = 'root';
        this.password = '123';
        this.port = 3306;
        this.database = "md4_connectdb_baitap";
        this.charset = "utf8_general_ci"
    }
    connection(){
        return mysql.createConnection({
            host:this.host,
            port:this.port,
            user:this.user,
            password:this.password,
            database:this.database,
            charset:this.charset
        })
    }
}

module.exports = new Database()