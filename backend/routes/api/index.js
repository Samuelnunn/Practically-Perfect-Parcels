const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const productsRouter = require('./products')
const shoppingCartsRouter = require('./shoppingCart')
const reviewsRouter = require('./reviews')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/products', productsRouter)
router.use('/shoppingcarts', shoppingCartsRouter)
router.use('/reviews', reviewsRouter)

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;