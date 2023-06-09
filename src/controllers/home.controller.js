const showList = require('../models/showList.model');
class HomeController{
    static async getHomepage(req,res){
        let {page,limit}=req.query
        let allList = await showList.showAll()
        let numberOfShow = 3
        let numberOfPage = Math.ceil(allList.length / numberOfShow)
        let list = await showList.showList(page,limit)
        res.render('home',{list:list,numberOfPage:numberOfPage,numberOfShow:numberOfShow,currentPage:page})
    }
}

module.exports = HomeController