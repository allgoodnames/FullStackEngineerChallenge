const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.post('/', async (req, res) => {

  try {
    const employees = await Employee.find();

    if(foundEmployee = employees.find((employee) => employee.name === req.body.name)) {
      res.json({ validated: true, employee: foundEmployee});
    } else {
      res.json({ validated: false});
    }

  } catch(err) {
    res.json({ message: err});
  }

});

module.exports = router;
