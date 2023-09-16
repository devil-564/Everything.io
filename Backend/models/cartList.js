const mongoose = require("mongoose")
const {Schema} = mongoose;

const CartList = new Schema ({
    
    userPassword : {
        type : String,
        require : true
    },
    productName : {
        type : String,
        require : true
    },

    productPrice : {
        type : String,
        require : true
    },

    currentCartCount : {
        type : Number,
        require : true
    },

    productIssueDate : {
        type : Date,
        default : Date.now()
    },

}) 

const Cart = mongoose.model('Cart', CartList)

module.exports = Cart