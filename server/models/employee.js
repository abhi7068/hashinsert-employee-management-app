const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema(
  {
    employee_id: {
      type: Number,
      required: true,
    },
    employee_name: {
      type: String,
      required: true,
    },
    // last_name: {
    //   type: String,
    //   required: true,
    // },
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    hire_date: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("employee", employeeSchema);
