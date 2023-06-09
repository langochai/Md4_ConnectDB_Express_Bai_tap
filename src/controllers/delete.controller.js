const deleteModel = require('../models/delete.model');
class DeleteController{
    static async renderDeletePage(req, res){
        let id = req.query.id
        res.render('delete',{id:id})
    }
    static async delete(req,res){
        let id=req.query.id
        await deleteModel.delete (id).catch(err=>{
            console.log(err.message)
        })
        res.redirect(301,'/')
    }
}

module.exports = DeleteController