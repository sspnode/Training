const mongoose = require('mongoose');
const Joi = require('joi');

const Genre = mongoose.model('genre', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));


function validateReq(request) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(request, schema);
}

exports.Genre = Genre;
exports.validate = validateReq;