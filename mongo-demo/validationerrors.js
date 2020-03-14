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
        lowercase: true
        //match: /pattern/ 
    },
    categorie: {
        type: String,
        enum: ['web', 'mobile', 'network'],
        lowercase: true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function (v, callback) {
                setTimeout(() => {
                    const validationResult = v && v.length > 0;
                    callback(validationResult);
                }, 4000);
            },
            message: 'Courses should atleast contain one tag'
        }
    },
    price: {
        type: Number,
        //required: function () { return this.isPublished },
        min: 10,
        max: 100,
        set: v => { return Math.round(v) },
        get: v => { return Math.round(v) }
    },
    isPublished: Boolean,
    date: { type: Date, default: Date.now }
});

const Course = mongoose.model('course', courseSchema);

(async () => {
    const course = new Course({
        name: 'Node Js Advanced',
        categorie: 'WEB',
        author: 'Abdul Waheed',
        tags: ['backend'],
        isPublished: true,
        price: 18.7
    });

    try {
        //const result = await course.save();
        await course.validate();
        const result = await course.save();

        console.log(result);
    }
    catch (ex) {

        for (item in ex.errors) {
            console.log(ex.errors[item].message);

        }
    }


})();