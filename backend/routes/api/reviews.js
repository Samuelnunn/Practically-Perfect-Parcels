const express = require('express');
const router = express.Router();
const { User, Review } = require('../../db/models');
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next)

router.post(`/`, asyncHandler( async(req, res, next) => {
    const {  productId, reviewerId, reviewText  } = req.body;
    console.log(req.body);
    const review = await Review.create({
        productId,
        reviewerId,
        reviewText
    },
   )
   res.json(review);
}));

router.get("/", asyncHandler( async(req, res, next) => {
    try {
        const products = await Product.findAll()
        res.json({products: products})
    } catch (e) {
        next(e)
    }
}));

module.exports = router
