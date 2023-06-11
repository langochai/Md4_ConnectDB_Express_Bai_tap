const create = require('../models/create.model');
class CreateController{
    static async renderCreatePage(req, res){
        res.render('create')
    }
    static async create(req,res){
        let {name,age,role,department} = req.body;
        let avatar = req.files.avatar;
        let filePath = './src/upload/'+ name + '-' + age + '-' + avatar.name;
        await avatar.mv(filePath);
        await create.create(name,age,role,department,filePath).catch(err=>{
            console.log(err.message)
        })
        res.redirect(301,'/')
    }
}

module.exports = CreateController