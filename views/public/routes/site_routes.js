const router = require('express').Router();
const promise = require('promise');
const path = require('path');
const weather = require('openweather-apis');
const dotenv = require('dotenv');
dotenv.config({path: './public/routes/'});

'use strict' ;


router.get("/",(req , res)=>{
    res.render('./public/page/form.ejs');
});

router.get('/definetly-not-on-earth' ,(req,res)=>{
    let name = req.query.name;
    res.render('./public/page/404.ejs', {lmao : name})
});

router.post("/city" , (req , res)=>{
    (async() => {
        try{
            weather.setLang('en'); 
            weather.setCity(req.body.cityName);
            weather.setAPPID("e34c4b2727ddd95440331ba32daec136");
            weather.getAllWeather(function(err, JSONObj){
                console.log(JSONObj)
                if(JSONObj.cod!='404')
                    res.render('./public/page/index.ejs' , {data : JSONObj});
                else
                    res.redirect('/definetly-not-on-earth?name='+req.body.cityName);
            });
        }
        catch(err){
            console.log(err);
        }
    })();
});

module.exports = router ;