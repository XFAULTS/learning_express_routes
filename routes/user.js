const express = require('express');
const routes = express.Router();

routes.get('/user',(req,res)=>{
    res.send("<h1>this is user</h1>");
});

routes.post('/user',(req,res)=>{
    res.send("<h2>the user post req</h2>");
});

module.exports = routes;