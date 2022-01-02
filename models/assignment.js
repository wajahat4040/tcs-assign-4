var mongoose = require('mongoose');

var schema = mongoose.Schema;

var assignmentSchema = new schema({
    Description: {
        type: String,
        required: true,
    },
    Questions: [{
        Q:{
            type: String,
            required: true
        },
        marks:{

            type:Number,
            required: true
        }
    }],
    Attempted:[{
    //    student_id: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Student'
    // },

    student_id:{type:Number,
    required:true
},
    uploaded_file:{
        type:String
        }
    }]

});
module.exports = mongoose.model('Assignment', assignmentSchema);