const BaseModel = require('./base.model')
class DeleteModel extends BaseModel{
    async delete(id){
        let sql = `delete from employeelist where id = ${+id}`
        return await this.query(sql)
    }
}

module.exports = new DeleteModel()