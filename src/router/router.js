const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const HomeController = require('../controllers/home.controller');
const CreateController = require('../controllers/create.controller');
const UpdateController = require('../controllers/update.controller');
const DeleteController = require('../controllers/delete.controller');
const bodyParser = require("body-parser");
const urlencoded = bodyParser.urlencoded({extended:false});
const fileUpload = require('express-fileupload');
const configForUpload = fileUpload({createParentPath: true})

router.get('/',(req,res)=>{
    res.redirect('/home?page=1&limit=3')
})
router.get('/home',HomeController.getHomepage);
router.get('/create',CreateController.renderCreatePage);
router.get('/update',UpdateController.renderUpdatePage);
router.get('/delete',DeleteController.renderDeletePage);
router.post('/create',configForUpload,CreateController.create)
router.post('/update',urlencoded,UpdateController.update)
router.post('/delete',urlencoded,DeleteController.delete)
module.exports = router