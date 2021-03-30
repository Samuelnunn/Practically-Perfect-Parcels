import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import reviewReducer, { fetchAllReviews, removeAReview, addReviewToThePage, getAUser } from '../../store/reviews';




const DeleteClick = ({review}) => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);
    console.log(review)
    const [reviewDelete, setReviewDelete] = useState([]);

    
    const handleDeleteClick = async (e) => {
        // e.preventDefault();
        const reviewToRemove = e.target.value;
        setReviewDelete(reviewToRemove)
        console.log(reviewDelete)
        return dispatch(removeAReview(reviewToRemove))
        .then(() => dispatch(fetchAllReviews()));
    };

    // useEffect(() => { 
    //     setReadCheck(eachPersonWhoHasMessaged.read);
    // }, [ dispatch, eachPersonWhoHasMessaged, readCheck]);
    
    return review.reviewerId === userId ?
        <button className='reviewButton' onClick={handleDeleteClick} value={review.id} >Delete Review</button>
    : null
};

export default DeleteClick;