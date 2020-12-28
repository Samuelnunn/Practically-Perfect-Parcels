'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productName: DataTypes.STRING,
    productDescription: DataTypes.TEXT,
    price: DataTypes.FLOAT
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};