'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class backup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  backup.init(
    {
      kodePeserta: DataTypes.INTEGER,
      kodeTes: DataTypes.INTEGER,
      jawaban: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'backup',
    }
  );
  return backup;
};
