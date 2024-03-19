const express = require('express');
const ejs = require('ejs');
const PORT  = 3000;
const app = express();

app.set('view engine', 'ejs');

const userRoutes = require('./routes/user');
const loginRoutes = require('./routes/login');

app.use('/',userRoutes);
app.use('/',loginRoutes);

app.listen(PORT , (req,res)=>{
    console.log(`The server is running on the port ${PORT}`);
});