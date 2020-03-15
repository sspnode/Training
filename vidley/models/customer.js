const mongoose = require('mongoose');
const Joi = require('joi');


const Customer = mongoose.model('customer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 100
    },
    phone: {
        type: String,
        required: true,
        min: 5,
        max: 100,
        unique: true
    },
    isGold: {
        type: Boolean,
        default: false
    }
}));

function validateReq(request) {
    console.log(request);
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean()
    }
    return Joi.validate(request, schema);
}


function validateUpdateReq(request) {
    console.log(request);
    const schema = {
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean()
    }
    return Joi.validate(request, schema);
}


exports.Customer = Customer;
exports.validate = validateReq;
exports.validate1 = validateUpdateReq;