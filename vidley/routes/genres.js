const express = require('express');
const Joi = require('joi');

const router = express.Router();


const genres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Thriller" },
    { id: 3, name: "Sci-Fi" }
];


router.get('/', (req, res) => {
    res.send(genres);
});

router.get('/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));

    if (!genre) return res.status(404).send(`Genre with id ${req.params.id} not found`);

    res.send(genre);
});

router.post('/', (req, res) => {
    const { error } = validateReq(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }
    genres.push(genre);
    res.send(genre);
});

router.put('/:id', (req, res) => {
    const { error } = validateReq(req.body);
    if (error) return res.status(400).send(error.details[0].message);
   
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send(`Genre with id ${req.params.id} not found`);

    genre.name = req.body.name;
    res.send(genre);
});

router.delete('/:id', (req, res) => {
     
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send(`Genre with id ${req.params.id} not found`);

    const index = genres.indexOf(genre);
    genres.splice(index,1);
    
    res.send(genre);
});

function validateReq(request) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(request, schema);
}

module.exports = router;