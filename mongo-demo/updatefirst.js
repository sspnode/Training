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


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
});


//const Course = mongoose.model('colcourse', courseSchema);
const Course = mongoose.model('course', courseSchema);

async function updateCourse(id) {
    const result = await Course
        .update({ _id: id }, {
            $set: {
                isPublished: true,
                author: 'Sana'
            }
        })

    console.log(result);
}

updateCourse('5e68cca02b8f36141437808a');