'use strict';

const MotorcycleModel = (sequelize, DataTypes) => sequelize.define('Motorcycle', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = MotorcycleModel;