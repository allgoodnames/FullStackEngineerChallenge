const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch(err) {
    res.json({ message: err});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch(err) {
    res.json({ message: err});
  }
});

router.post('/', async (req, res) => {
  const employee = new Employee({
    usertype: req.body.usertype,
    name: req.body.name
  });
  try {
    const savedEmployee = await employee.save();
    res.json(savedEmployee);
  } catch(err) {
    res.json({ message: err});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removedEmployee = await Employee.remove({_id: req.params.id});
    res.json(removedEmployee);
  } catch(err) {
    res.json({ message: err});
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const employee = await Employee.updateOne(
      {_id: req.params.id},
      { $set:
        {usertype: req.body.usertype, name: req.body.name}
      }
    );
    res.json(employee);
  } catch(err) {
    res.json({ message: err});
  }
});

module.exports = router;
