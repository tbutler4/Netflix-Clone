'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class watchlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.watchlist.belongsTo(models.user)
    }
  };
  watchlist.init({
    userId: DataTypes.INTEGER,
    movieName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'watchlist',
  });
  return watchlist;
};