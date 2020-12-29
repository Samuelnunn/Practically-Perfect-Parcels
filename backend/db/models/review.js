'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    productId: DataTypes.INTEGER,
    reviewerId: DataTypes.INTEGER,
    reviewText: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Product, {foreignKey: 'productId'});
    Review.belongsTo(models.User, {foreignKey: 'reviewerId'});
  };
  return Review;
};