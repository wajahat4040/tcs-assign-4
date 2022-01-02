var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    CGPA: {
        type: Number,
        required: true
    },
    Result: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('student', studentSchema);