const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect('mongodb://localhost/mongo-exercises');
        console.log('Mongo Db connected');
    }
    catch (ex) {
        console.log(ex);
    }
})();

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    price: Number,
    isPublished: Boolean,
    date: { type: Date, default: Date.now }
});

const Courses = mongoose.model('course', courseSchema);

async function getCourses() {
    return await Courses
        .find({ isPublished: true, tags: { $in: ['backend', 'frontend'] } })
        .sort({price : -1})
        .select('name author tags isPublished price')
        .lean(true);
}

async function getCourses1() {
    return await Courses
        .find({ isPublished: true })
        .or([{ tags: 'frontend' }, { tags: 'backend' }])
        .sort('-price')
        .select('name author tags isPublished price')
        .lean(true);
}


(async () => {
    const result = await getCourses();
    console.log(result);
    console.log('********************************');
    const result1 = await getCourses1();
    console.log(result1);
})();
