const BaseModel = require('./base.model')
class GetModel extends BaseModel{
    async get(id){
        let sql = `select * from employeelist where id = ${+id}`
        return await this.query(sql)
    }
}

module.exports = new GetModel()