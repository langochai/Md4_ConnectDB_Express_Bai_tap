const BaseModel = require('./base.model')
class UpdateModel extends BaseModel{
    async update(id,name,age,role,department,avatar){
        let sql = `update employeelist
        set
        name = "${name}",age=${+age},role="${role}",department="${department}",avatar="${avatar}"
        where id=${+id}`
        return await this.query(sql)
    }
}

module.exports = new UpdateModel()