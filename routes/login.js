const express = require('express');
const path = require("path");
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.render(path.join(__dirname,'..','public','index.ejs'));
});

routes.post('/',(req,res)=>{
    res.render(path.join(__dirname,'..','public','index.ejs'));
});

module.exports = routes;