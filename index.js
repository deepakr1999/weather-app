const express = require('express');
const path = require('path');
const router  = require('./views/public/routes/site_routes');

const bp = require('body-parser');
const app = express();
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());
app.use(express.static(path.resolve('./views/public/page')));
app.set('view engine' , 'ejs');
app.engine('html', require('ejs').renderFile);


app.use("",router);


app.listen(3000 , ()=>{
    console.log("The server is listening at port 3000!");
} )