const mongoose = require('mongoose');
const userModel = new mongoose.Schema(
    {
        nomuser:{
            type: String
        },
        password:{
            type: String
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const ModelUser = mongoose.model("usuario",userModel);
module.exports = ModelUser;