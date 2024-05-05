const Person = require('../models/person');

const createPerson = async (req, res, next) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getPersons = async (req, res, next) => {
  try {
    const persons = await Person.find({});
    res.status(201).json(persons);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSpecificPerson = async (req, res, next) => {
  try {
    const workType = req.params.workType;
    if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
      const response = await Person.find({ work: workType });
      console.log('response Fetched');
      res.status(200).json(response);
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updatePerson = async (req, res, next) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deletePerson = async (req, res, next) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.status(200).json({ message: 'Person Delete Successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createPerson,
  getPersons,
  getSpecificPerson,
  updatePerson,
  deletePerson,
};
