const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
  usertype: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
