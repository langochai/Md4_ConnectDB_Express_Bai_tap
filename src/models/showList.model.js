const BaseModel = require('./base.model')
class ShowListModel extends BaseModel{
    async showAll(){
        let sql = `select * from employeelist `
        return await this.query(sql)
    }
    async showList(page,limit){
        let sql = `select * from employeelist limit ${limit} offset ${(page-1)*limit}`
        return await this.query(sql)
    }
}

module.exports = new ShowListModel()