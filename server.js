const express = require('express');
const PORT = 8000;
const app = express();
const multer = require('multer');
const upload = multer();
const bodyParser = require('body-parser');
const router = require('./src/router/router');
const fileUpload = require('express-fileupload');
// const _ = require('lodash');

app.use(express.static('public'));
app.use(router);
app.use(bodyParser.urlencoded({extended:false}));
app.use(fileUpload({
    createParentPath: true
}));
app.set('views',"./src/views");
app.set('view engine','ejs');

app.listen(PORT,()=>{
    console.log(`segs at http://localhost:${PORT}`)
})