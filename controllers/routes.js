var express = require("express");
var app = express();
var burger = require('../models/burger.js')

app.get('/', function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index',{burger_data});
    })
})

app.put('/burgers/update', function(req,res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

app.post('/burgers/create', function(req,res){
    burger.create(req.body.burger_name, function(result){
        res.redirect('/')
    })
})


module.exports =app;