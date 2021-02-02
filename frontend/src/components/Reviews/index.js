import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import reviewReducer, { fetchAllReviews, removeAReview, addReviewToThePage, getAUser } from '../../store/reviews';
import './Reviews.css'


const ProductReviews = ({oneProduct}) => {
    const dispatch = useDispatch();
    const allReviews = useSelector(state => {
        return state.review.review
    });
    const userId = useSelector(state => state.session.user.id);
    const userName = useSelector(state => state.session.user.username);
    const myReviews = useSelector(state => {
        return state;
    })
    // console.log(myReviews)

    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);
    const [reviewDelete, setReviewDelete] = useState([])
    
    useEffect(() => {
        const userFetch = getAUser;
        console.log("HELLLO", userFetch)
        dispatch(userFetch)
    }, [dispatch])
    useEffect(() => {
        const reviewFetch = fetchAllReviews();
        dispatch(reviewFetch)
    }, [dispatch, review, reviewDelete]);
    

    // if(review.length === 0) {
    //     return <h3>There are no reviews for this product!</h3>
    // }

    const handleDeleteClick = async (e) => {
        // e.preventDefault();
        const reviewToRemove = e.target.value;
        setReviewDelete(reviewToRemove)
        console.log(reviewDelete)
        return dispatch(removeAReview(reviewToRemove));
    };
    
    const handleEditClick = async (e) => {
        e.preventDefault();
        const reviewToEdit= e.target.value;
        await dispatch(reviewToEdit(reviewToEdit));
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
let a = 5;
console.log(++a);
    // logic to edit/delete review.reviewerId === userId

    return (
        <div id='product-review'>
            <div id='all-reviews'> Reviews: </div>
            {!allReviews && <h3>There are no reviews for this product yet</h3>}
            {allReviews && allReviews.map(review => {
                if (oneProduct.id === review.productId) {
                    // console.log(oneProduct, review)
                    return (
                        <>
                            <div id='single-review'>
                                <p>{userName}: {review.reviewText}</p>
                                <button className='reviewButton' onClick={handleDeleteClick} value={review.id} >Delete Review</button>
                                {/* <button className='reviewButton' onClick={handleEditClick} value={review.id}>Edit Review</button> */}
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
                    className='review-area'
                    name='review' 
                    id={review.id}
                    placeholder='Write a Review'
                    value={review} 
                    onChange={e => { setReview(e.target.value) }}
                    required
                >
                </textarea>
                {<button className='reviewButton' onClick={handleReviewClick}>Submit Review</button>
                }
            </div>
        </div>
    )
};


export default ProductReviews;