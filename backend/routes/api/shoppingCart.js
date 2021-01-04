const express = require('express');
const router = express.Router();
const { ShoppingCart, User, CartItem, Product } = require('../../db/models');
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next)

router.get('/:id', asyncHandler( async(req, res, next) => {
    const shopperId = req.params.id;
    const cartItems = await CartItem.findAll({
        where: { 
            shopperId
         },
        include: [ Product ]
    });
    res.json({ cartItems });
}));

router.delete('/:id', asyncHandler ( async(req, res, next) => {
    const itemToDelete = req.body.id
    const cartItemtoDelete = await CartItem.findOne(itemToDelete)
        cartItemtoDelete.destroy(); 
        res.json({
            message: 'Item deleted!'
        })
 
}));

router.post(`/`, asyncHandler( async(req, res, next) => {
    const { cartId, productId, shopperId, price } = req.body;
    console.log(req.body);
    const cartItem = await CartItem.create({
        cartId,
        productId,
        shopperId,
        price 
    },
   )
   res.json(cartItem);
}));


router.put(`/`, asyncHandler( async(req, res, next) => {
   const { quantity, shopperId, cartId } = req.body;
    await ShoppingCart.update({
       quantity,
   }, {
       where: { shopperId }
   })
   const cartItem = await CartItem.create({
        cartId,
        productId,
        shopperId,
        price 
   },
   { where: { shopperId }}
   )
   res.json(cartItem);
}));



module.exports = router;