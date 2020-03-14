const mongoose = require('mongoose');

(async () => {
    await mongoose.connect('mongodb://localhost/mongo-exercises');
    console.log('mongo db connected');
})();

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    price: Number,
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('course', courseSchema);

async function getCourses() {
    return await Course
        .find({ isPublished: true })
        .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
        .select(' name author isPublished price')
        .lean(true);
}

(async () => {
    console.log(await getCourses());
})();