'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class watchList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //models.watchlist.belongsTo(models.user)
    }
  };
  watchList.init({
    userId: DataTypes.STRING,
    movieName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'watchList',
  });
  return watchList;
};