const update = require('../models/update.model');
const getModel = require('../models/get.model');
class UpdateController{
    static async renderUpdatePage(req, res){
        let id = req.query.id
        let employee = await getModel.get(id)
        let {name,age,role,department,avatar} = employee[0]
        res.render('update',{id:id,name:name,age:age,role:role,department:department,avatar:avatar})
    }
    static async update(req,res){
        let id=req.query.id
        let {name,age,role,department,avatar} = req.body;
        await update.update(id,name,age,role,department,avatar).catch(err=>{
            console.log(err.message)
        })
        res.redirect(301,'/')
    }
}

module.exports = UpdateController