const { Customer, validate, validate1 } = require('../models/customer.js');
const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');


const router = express.Router();




router.get('/', async (req, res) => {
    const customers = await Customer.find().sort(' name isGold');
    res.send(customers);
});


router.get('/:phone', async (req, res) => {
    const customer = await Customer.find({ phone: req.params.phone });
    if (!customer) return res.status(400).send(`Customer id ${req.params.id} not found`);
    res.send(customer);

})


router.post('/', async (req, res) => {
    console.log(req.body);
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });

    try {
        customer = await customer.save();
    }
    catch (ex) {
        console.error(ex.message);
    }

    res.send(customer);
});

router.put('/:phone', async (req, res) => {
    const { error } = validate1(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        let customer = await Customer.findOne({ phone: req.params.phone });

        console.log(customer);
        customer.phone = req.body.phone;
        customer.isGold = req.body.isGold;

        customer = await customer.save();

        if (!customer) return res.status(400).send(`custmer with Id ${req.params.id} not found`);

        res.send(customer);
    }
    catch (ex) {
        console.log(ex.message);
        res.send(ex.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByIdAndRemove(req.params.id);

        if (!customer) return res.status(400).send(`custmer with Id ${req.params.id} not found`);

        res.send(customer);
    }
    catch (ex) {
        console.log(ex.message);
        res.send(ex.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);

        if (!customer) return res.status(400).send(`custmer with Id ${req.params.id} not found`);

        res.send(customer);
    }
    catch (ex) {
        console.log(ex.message);
        res.send(ex.message);
    }
});




module.exports = router;