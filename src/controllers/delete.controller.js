const deleteModel = require('../models/delete.model');
const getModel = require('../models/get.model');
const fs = require('fs');
class DeleteController{
    static async renderDeletePage(req, res){
        let id = req.query.id
        res.render('delete',{id:id})
    }
    static async delete(req,res){
        let id=req.query.id;
        let model = await getModel.get(id);
        let avatar = "src/upload/"+ model[0].avatar;
        fs.unlink(avatar,(err)=>{
            if(err) console.log(err.message)
        });
        await deleteModel.delete (id).catch(err=>{
            console.log(err.message)
        });
        res.redirect(301,'/')
    }
}

module.exports = DeleteController