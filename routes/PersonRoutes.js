const express = require('express');
const Person = require('../models/person');
const {
  createPerson,
  getPersons,
  getSpecificPerson,
  updatePerson,
  deletePerson,
} = require('../controllers/Person');
const router = express.Router();

router.post('/', createPerson);

router.get('/', getPersons);

router.get('/:workType', getSpecificPerson);

router.put('/:id', updatePerson);

router.delete('/:id', deletePerson);

module.exports = router;
