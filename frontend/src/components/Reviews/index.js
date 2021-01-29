import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import reviewReducer, { fetchAllReviews, removeAReview, addReviewToThePage } from '../../store/reviews';


const ProductReviews = ({oneProduct}) => {
    const dispatch = useDispatch();
    const allReviews = useSelector(state => {
        return state.review.review
    });
    const userId = useSelector(state => state.session.user.id);

    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const reviewFetch = fetchAllReviews();
        dispatch(reviewFetch)
    }, [dispatch, review]);

    // if(review.length === 0) {
    //     return <h3>There are no reviews for this product!</h3>
    // }

    const handleDeleteClick = async (e) => {
        e.preventDefault();
        const reviewToRemove = e.target.value;
        await dispatch(removeAReview(reviewToRemove));
    };

    const handleReviewClick = (e) => {
        e.preventDefault();
        const singleProductId = oneProduct.id;
        
        if (review) {
            setErrors([]);
            return dispatch(addReviewToThePage(singleProductId, userId, review))
            .catch(res => {
                if (res.data && res.data.errors) setErrors(res.data.errors)
            });
        }
        return setErrors(['Review field must be filled out']);
    };

    // logic to edit/delete review.reviewerId === userId

    return (
        <div id='product-review'>
            <div id='all-reviews'> Reviews: </div>
            {!allReviews && <h3>There are no reviews for this product yet</h3>}
            {allReviews && allReviews.map(review => {
                if (oneProduct.id === review.productId) {
                    return (
                        <>
                            <div id='single-review'>
                                <p>{review.reviewText}</p>
                                <button onClick={handleDeleteClick} value={review.id}>Delete Review</button>
                            </div>
                        </>
                    )
                }
            })}
            <div>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <textarea
                    rows='10'
                    value='10' 
                    name='review' 
                    id={review.id}
                    placeholder='Write a Review'
                    value={review} 
                    onChange={e => { setReview(e.target.value) }}
                    required
                >
                </textarea>
                {<button onClick={handleReviewClick}>Submit Review</button>
                }
            </div>
        </div>
    )
};


export default ProductReviews;