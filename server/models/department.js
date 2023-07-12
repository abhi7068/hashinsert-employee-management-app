const mongoose=require('mongoose');
const departmentSchema = new mongoose.Schema({
    department_id: {
        type:Number,
        required:true,
    },
    department_name: {
        type:String,
        required:true,
    },
    manager_id: {
        type:Number,
        required:true,
    },
});

module.exports = mongoose.model('department', departmentSchema);