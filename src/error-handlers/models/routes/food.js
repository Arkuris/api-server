const express = require('express');
const Food = require('../food.js');

const handleNotFound = require('../../404.js');
const handleServerError = require('../../500.js');

const router = express.Router();

// router.post('/food', async (req, res, next) => {
//   console.log('Inside POST /food');
//   try {
//     const food = await Food.create(req.body);
//     res.status(200).json(food);
//   } catch (error) {
//     next(error); 
//   }
// });

// router.get('/food', async (req, res, next) => {
//   try {
//     const foods = await Food.findAll();
//     res.status(200).json(foods);
//   } catch (error) {
//     next(error);
//   }
// });

// router.get('/food/:id', async (req, res, next) => {
//   try {
//     const food = await Food.findByPk(req.params.id);
//     if (!food) {
//       const err = new Error('Food Not Found');
//       err.status = 404;
//       throw err;
//     }
//     res.status(200).json(food);
//   } catch (error) {
//     next(error);
//   }
// });

// router.put('/food/:id', async (req, res, next) => {
//   try {
//     const [updated] = await Food.update(req.body, {
//       where: { id: req.params.id }
//     });
//     if (!updated) {
//       const err = new Error('Food not found');
//       err.status = 404;
//       throw err;
//     }
//     const updatedFood = await Food.findByPk(req.params.id);
//     res.status(200).json(updatedFood);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/food/:id', async (req, res, next) => {
//   try {
//     const deleted = await Food.destroy({
//       where: { id: req.params.id }
//     });
//     if (!deleted) {
//       const err = new Error('Food not Found');
//       err.status = 404;
//       throw err;
//     }
//     res.status(204).send("Deleted");
//   } catch (error) {
//     next(error);
//   }
// });

router.get('/', async (req, res) => {
  console.log("GET /api/food called");
  let records = await Food.findAll();
  res.status(200).send({ results: records });
});

router.post('/', async (req, res) => {
  console.log("POST /api/food called");
  let record = await Food.create(req.body);
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
    where: { id }
  });

  res.status(204).send('deleted');
});

module.exports = router;