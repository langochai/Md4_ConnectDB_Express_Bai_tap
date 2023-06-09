const create = require('../models/create.model');
class CreateController{
    static async renderCreatePage(req, res){
        res.render('create')
    }
    static async create(req,res){
        let {name,age,role,department,avatar} = req.body;
        await create.create(name,age,role,department,avatar).catch(err=>{
            console.log(err.message)
        })
        res.redirect(301,'/')
    }
}

module.exports = CreateController