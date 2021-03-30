
import { fetch } from './csrf';

const ADD_A_REVIEW = "/reviews/ADD_REVIEWS";
const GET_ALL_REVIEWS = "/reviews/GET_REVIEWS";
const GET_A_USER = "/reviews/USER";
const DELETE_A_REVIEW = "/reviews/DELETE_A_REVIEW";
const EDIT_A_REVIEW = "/reviews/EDIT_A_REVIEW"; 

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

const getUser = (username) => {
    return {
        type: GET_A_USER,
        username: username,
    };
};

const deleteReview = (review) => {
    return {
        type: DELETE_A_REVIEW,
        reviews: review,
    };
};

const editReview = (review) => {
    return {
        type: EDIT_A_REVIEW,
        reviews: review,
    };
};

export const addReviewToThePage = (productId, reviewerId, reviewText) => {
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
export const getAUser = () => {
    return async (dispatch) => {
        const response = await fetch(`/api/reviews`);
        dispatch(
            getUser(response.data)
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

export const editAReview = (reviewerId, reviewText) => async (dispatch) => {
    console.log(reviewerId)
    const response = await fetch(`/api/reviews`, {
        method: 'PATCH',
        body: JSON.stringify({
            reviewerId,
            reviewText
        })
    });
    if (response.ok) {
    dispatch(editAReview(reviewerId, reviewText))
    };
    return response
};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case ADD_A_REVIEW:
            let test = {...action.payload}
            return test
        case GET_ALL_REVIEWS:
            let nextState = { ...action.reviews}
            return nextState;
        case GET_A_USER:
            let userState = { ...action.username}
            return userState;
        case DELETE_A_REVIEW: 
            newState = {...state}
            delete newState[action.reviews]
            return newState;
        case EDIT_A_REVIEW: 
            newState = {...state}
            return newState;
        default:
            return state;
        };
};

export default reviewReducer;