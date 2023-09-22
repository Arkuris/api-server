const express = require('express');
// const Food = require('../models/food.js');
const FoodModel = require('../models/food.js');

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('GET /api/food called');
  let records = await FoodModel.findAll();
  res.status(200).send({ results: records });
});

router.post('/', async (req, res) => {
  console.log('POST /api/food called');
  let record = await FoodModel.create(req.body);
  res.status(200).json(record);
});

router.patch('/api/food/:id', async (req, res) => {
  let id = req.params.id;
  let recordToUpdate = await FoodModel.findByPk(id);
  recordToUpdate.update(req.body);
  await recordToUpdate.save();
  console.log('UPDATED RECORD', recordToUpdate);
  res.status(200).json(recordToUpdate);
});

router.delete('/api/food/:id', async (req, res) => {
  let id = req.params.id;
  await FoodModel.destroy({
    where: { id },
  });

  res.status(204).send('deleted');
});

module.exports = router;