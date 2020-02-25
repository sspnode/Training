const express = require('express');
const router = express.Router();
const Joi = require('joi');

var courses = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
]

router.get('/', (req, res) => {
    //res.send(JSON.stringify([1,2,3]));
    //res.send([1,2,3,4]);
    res.send(courses);
});


router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
        res.status(404).send('Given Course Id is not found');
    else
        res.send(course);
});

router.post('/', (req, res) => {
    const { error } = validateReq(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);

    res.send(course);

});

router.put('/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Given Course Id is not found');

    const { error } = validateReq(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);

});

router.delete('/:id', (req,res)=>{

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Given Course Id is not found');

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);

});

function validateReq(request) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(request, schema);
}

module.exports = router;