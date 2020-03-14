const mongoose = require('mongoose');

(async () => {
    await mongoose.connect('mongodb://localhost/playground');
    console.log('mongo db connected');
})();

const courseSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 50,
        //match: /pattern/ 
    },
    categorie: {
        type: String,
        enum: ['web', 'mobile', 'network']
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'Courses should atleast contain one tag'
        }
    },
    price: { 
        type: Number, 
        required: function () { return this.isPublished } },
    isPublished: Boolean,
    date: { type: Date, default: Date.now }
});

const Course = mongoose.model('course', courseSchema);

(async () => {
    const course = new Course({
        name: 'Node Js Advanced',
        categorie: 'test',
        author: 'Abdul Waheed',
        tags: [],
        price: 18,
        isPublished: true
    });

    try {
        //const result = await course.save();
        await course.validate();
        console.log(result);
    }
    catch (ex) {
        console.log(ex.message);
    }


})();