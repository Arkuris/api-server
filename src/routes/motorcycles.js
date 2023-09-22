const express = require('express');
const MotorcycleModel = require('../models/motorcycles.js');

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('GET /api/motorcycle called');
  let records = await MotorcycleModel.findAll();
  res.status(200).send({ results: records });
});

router.post('/', async (req, res) => {
  console.log('POST /api/motorcycle called');
  let record = await MotorcycleModel.create(req.body);
  res.status(200).json(record);
});

router.patch('/api/motorcycle/:id', async (req, res) => {
  let id = req.params.id;
  let recordToUpdate = await MotorcycleModel.findByPk(id);
  recordToUpdate.update(req.body);
  await recordToUpdate.save();
  console.log('UPDATED RECORD', recordToUpdate);
  res.status(200).json(recordToUpdate);
});

router.delete('/api/motorcycle/:id', async (req, res) => {
  let id = req.params.id;
  await MotorcycleModel.destroy({
    where: { id },
  });

  res.status(204).send('deleted');
});

module.exports = router;