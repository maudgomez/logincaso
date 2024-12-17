const mongoose = require('mongoose');
const dbconnect = ()=> {
    mongoose.set('strictQuery',true)
 mongoose.connect("mongodb://localhost:27017/login_express")

    .then((success)=> console.log("conexion exitosa"))
    .catch((err)=> console.log(err.message));
}

module.exports = dbconnect;