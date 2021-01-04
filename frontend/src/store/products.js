import { fetch } from './csrf';

const SET_ALL_PRODUCTS= "products/setProducts";

const setProducts = (products) => {
    return {
        type: SET_ALL_PRODUCTS,
        products: products,
    };
};

export const fetchAllProducts = () => {
    return async (dispatch) => {
        const response = await fetch("/api/products");
        dispatch (
            setProducts(response.data.products)
        );
    };
};

const initialState = [];

function reducer(state = initialState, action) {
    let newState;
    switch (action.type){
        case SET_ALL_PRODUCTS:
            newState = action.products;
            return newState;
        default:
            return state;
    }
}

export default reducer;