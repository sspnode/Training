const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/playground')
//     .then(() => console.log('Mongo DB connected..'))
//     .catch((err) => console.log(err));


(async () => {
    try {
        await mongoose.connect('mongodb://localhost/playground');
        console.log('Mongo DB connected..');
    }
    catch (err) {
        console.log(err);
    }
})();

console.log('Creating Schema');
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
});

console.log('Compiling Schema to model');
//const Course = mongoose.model('colcourse', courseSchema);
const Course = mongoose.model('course', courseSchema);


console.log('Saving Document');
// (async () => {
//     const course = new Course({
//         name: 'Concourse',
//         author: 'Abdul Waheed',
//         tags: ['CICD', 'DevOps'],
//         isPublished: true
//     });

//     console.log('Inside saving document');
//     const result = await course.save();
//     console.log(result);

// })();

async function saveCourse() {
    const course = new Course({
        name: 'Concourse',
        author: 'Safwan',
        tags: ['CICD', 'DevOps'],
        isPublished: true,
        price: 20
    });

    console.log('Inside saving document');
    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const courses = await Course
        //Comparision Query Operators
        .find({ price: { $in: [10, 20] } })
        //.find({ price: { $gt: 10, $lte: 30 } })
        //.find({ author: 'Safwan', isPublished: true })

        //Logical Query Operators
        //.find()
        //.or([{ author: 'Safwan'}, {isPublished: true }])
        //.and([{ author: 'Safwan'}, {isPublished: true }])

        // Regular ExpressionsF
        // Starts with Abdul
        //.find({ author: /^Abdul/ })
        // Ends with Waheed
        //.find({ author: /Waheed$/ })
        // Contains Saf
        //.find({ author: /.*Saf.*/ })



        .sort({ name: 1 })
        .lean(true)
    //To get count
    //.count()
    //.select({name:1});
    console.log(courses);

    // Pagination Example
    const pageNumber = 2;
    const pageSize = 10;
    const pcourses = await Course
        .find()
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)

}

//saveCourse();
getCourses();