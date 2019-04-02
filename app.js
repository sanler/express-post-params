const express= require('express');
const hbs     = require('hbs') 
const path    = require('path');
const bodyParser = require('body-parser');
const app=express();

//--0. setups
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');app.use

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

hbs.registerPartials(__dirname + '/views/partials');

//--1. Routes
app.get('/login',(req,res, next)=>{

    res.render('login');

});
app.post('/login',(req,res, next)=>{


    let email=req.body.email;
    let pass=req.body.password;
console.log(`${email} ${pass}`);
    if(email==='ironhacker@gmail.com' && pass==='password'){
     
     res.render('welcome');

    }else{

      res.render('goaway');  
    }

});
//--2. Server listening

app.listen(3000, ()=>{

console.log('Server listening on port 3000!');
});
