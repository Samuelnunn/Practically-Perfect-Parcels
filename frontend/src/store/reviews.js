import { fetch } from './csrf';

const ADD_A_REVIEW = '/reviews/ADD_REVIEWS'

const addAReview = (review) => {
    return {
        type: ADD_A_REVIEW,
        payload: review,
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
} 

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case ADD_A_REVIEW:
            return {
                ...state,
                [action.id]: action.payload
            };
        default:
            return state;
        };
};

export default reviewReducer;