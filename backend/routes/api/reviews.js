const express = require('express');
const router = express.Router();
const { User, Review, Product } = require('../../db/models');
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next)

router.post(`/`, asyncHandler( async(req, res, next) => {
    const {  productId, reviewerId, reviewText  } = req.body;
    console.log(req.body);
    await Review.create({
        productId,
        reviewerId,
        reviewText
    },
   )
   const review = await Review.findAll()
   res.json({
       review: review
    });
}));

router.get("/", asyncHandler( async(req, res, next) => {
    // const productId = req.params.id
    const review = await Review.findAll({
        include: [User]
    });
    
    res.json({
        review: review,
        // user:user
    })
}));
router.get("/", asyncHandler( async(req, res, next) => {
    const review = await User.findAll({});
    res.json({
        username: username,
    })
}));

router.delete('/', asyncHandler ( async(req, res, next) => {
    const reviewToDelete = req.body.reviewerId;
    const deleteReview = await Review.findByPk(reviewToDelete);
    await deleteReview.destroy(); 
    res.json({
        message: 'All reviews deleted'
    });
}));


router.patch('/', asyncHandler ( async(req, res, next) => {
    const reviewToUpdate = req.body.reviewerId;
    const editReview = await Review.findByPk(reviewToUpdate);
    await editReview.update({
        reviewText
    }); 
    res.json({
        message: 'Review Updated'
    });
}));

module.exports = router;
