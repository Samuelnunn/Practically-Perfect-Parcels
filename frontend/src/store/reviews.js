import { fetch } from './csrf';

const ADD_A_REVIEW = '/reviews/ADD_REVIEWS'
const GET_ALL_REVIEWS= "/reviews/GET_REVIEWS"

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

        dispatch (
            addAReview(response.data.review)
        );
    }   
};


export const fetchAllReviews = () => {
    return async (dispatch) => {
        const response = await fetch("/api/reviews");
        dispatch (
            getReviews(response.data.reviews)
        );
    };
};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case ADD_A_REVIEW:
            return {
                ...state,
                [action.id]: action.payload
            };
        case GET_ALL_REVIEWS:
            newState = action.reviews;
            return newState
        default:
            return state;
        };
};

export default reviewReducer;