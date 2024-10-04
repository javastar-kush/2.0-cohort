const mongoose = require('mongoose')
const { Schema } =  require("mongoose")

mongoose.connect("mongodb+srv://kushagra:79k2fprczu@cluster1.odiz2.mongodb.net/paytmAPP");

const UserSchema =new Schema({
    firstname : String,
    lastname : String,
    username : String,
    password : String
})

const AccountSchema = new Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    balance : {
        type : Number
    }
})

const User = mongoose.model("User",UserSchema);
const Account = mongoose.model("Account",AccountSchema);

module.exports = {
    User,
    Account
}
