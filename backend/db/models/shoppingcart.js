'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define('ShoppingCart', {
    quantity: DataTypes.INTEGER,
    shopperId: DataTypes.INTEGER
  }, {});
  ShoppingCart.associate = function(models) {
    ShoppingCart.hasMany(models.CartItem, {foreignKey: 'cartId'});
    ShoppingCart.belongsTo(models.User, {foreignKey: 'shopperId'});
  };
  return ShoppingCart;
};