'use strict';
var express = require('express');
var routes = require('./routes');
var jsonParser = require('body-parser').json;
var app = express();

app.use(jsonParser);

app.use(function(req, res, next){
  next();
});

app.use(function(req, res, next){
  req.body;
  next();
})

var port = process.env.port || 3007;
app.listen(port, function(){
    console.log('running at port :' , port)
});
