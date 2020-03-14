const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Mongo db connected'))
    .catch((err) => console.log(err));

const courseSchema = new mongoose.Schema({
    author: String,
    name: String,
    isPublished: Boolean,
    tags: [String],
    date: { type: Date, default: Date.now },
    price: Number
});

const Course = mongoose.model('course', courseSchema);

async function getCourses() {
    return courses = await Course
        .find({ isPublished: true, tags: 'backend' })
        .sort({ name: 1 })
        .select({ name: 1, author: 1 })
        .lean(true);
}

// getCourses()
//     .then((result) => console.log(result));


(async () => {
    const result = await getCourses();
    console.log(result);
})();