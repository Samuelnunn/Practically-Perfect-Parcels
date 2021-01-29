import { fetch } from './csrf';

const ADD_A_REVIEW = "/reviews/ADD_REVIEWS";
const GET_ALL_REVIEWS = "/reviews/GET_REVIEWS";
const DELETE_A_REVIEW = "/reviews/DELETE_A_REVIEW" 

const addAReview = (review) => {
    return {
        type: ADD_A_REVIEW,
        payload: review,
    };
};

const getReviews = (reviews) => {
    return {
        type: GET_ALL_REVIEWS,
        reviews: reviews,
    };
};
const deleteReview = (review) => {
    console.log(review)
    return {
        type: DELETE_A_REVIEW,
        reviews: review,
    };
};

export const addReviewToThePage = (productId, reviewerId, reviewText) => {
    console.log(reviewerId)
    return async(dispatch) => {
        const response = await fetch(`/api/reviews`, {
            method: 'POST',
            body: JSON.stringify({
                productId,
                reviewerId,
                reviewText
            }),
        });
        if (!response.ok) throw response;
        dispatch(
            addAReview(response.data)
        );
    }   
};

export const fetchAllReviews = () => {
    return async (dispatch) => {
        const response = await fetch(`/api/reviews`);
        dispatch(
            getReviews(response.data)
        );
    };
};

export const removeAReview = (reviewerId) => async (dispatch) => {
    console.log(reviewerId)
    const response = await fetch(`/api/reviews`, {
        method: 'DELETE',
        body: JSON.stringify({
            reviewerId
        })
    });
    if (response.ok) {
    dispatch(deleteReview(reviewerId))
    };
    return response
};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case ADD_A_REVIEW:
            // console.log("action", action.payload)
            console.log("new state!", newState)
            // let review = Object.assign(newState, {[newState.review]: action.payload})
            // return Object.assign(newState, {[action.payload.id]: action.payload})
            let test = {...action.payload}
            console.log(test)
            return test
        case GET_ALL_REVIEWS:
            // newState = action.reviews;
            // console.log("HEYYYYY", newState)
            let nextState = { ...action.reviews}
            // console.log("!!!!!!!!!!!!!!!", newState)
            return nextState;
        case DELETE_A_REVIEW: 
            newState = {...state}
            delete newState[action.reviews]
            return newState;
        default:
            return state;
        };
};

export default reviewReducer;