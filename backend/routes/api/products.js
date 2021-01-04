const express = require('express')
const router = express.Router();

const { Product } = require('../../db/models');



router.get("/", async (req, res, next) => {
    try {
        const products = await Product.findAll()
        res.json({products: products})
    } catch (e) {
        next(e)
    }

});


module.exports = router;