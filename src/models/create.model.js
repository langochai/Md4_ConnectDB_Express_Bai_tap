const BaseModel = require('./base.model')
class CreateModel extends BaseModel{
    async create(name,age,role,department,avatar){
        let sql = `insert into employeelist(name,age,role,department,avatar)
values ("${name}",${+age},"${role}","${department}","${avatar}")`
        return await this.query(sql)
    }
}

module.exports = new CreateModel()