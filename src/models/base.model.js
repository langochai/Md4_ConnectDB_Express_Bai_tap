const Database = require('./Database')
class BaseModel{
    constructor() {
        this.connection = Database.connection()
    }
    connect(){
        this.connection.connect(err=>{
            if(err) console.log(err.message)
            else console.log(`connected to database`)
        })
    }
    query(sql){
        return new Promise((resolve, reject)=>{
            this.connection.query(sql,(err,result)=>{
                if(err) return reject(err)
                else return resolve(result)
            })
        })
    }
}

module.exports = BaseModel;