'use strict';

const FoodModel = (sequelize, DataTypes) => sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = FoodModel