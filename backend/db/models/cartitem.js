'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    shopperId: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {});
  CartItem.associate = function(models) {
    CartItem.belongsTo(models.ShoppingCart, {foreignKey: 'cartId'});
    CartItem.belongsTo(models.Product, {foreignKey: 'productId'});
    CartItem.belongsTo(models.User, {foreignKey: 'shopperId'});
  };
  return CartItem;
};