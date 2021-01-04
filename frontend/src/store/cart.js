import { fetch } from './csrf';

const ADD_ITEM_TO_THE_CART = '/shoppingcarts/ADD_ITEM';
const BUY_ITEMS = '/shoppingcarts/BUY_ITEMS';
const ITEMS_IN_THE_CART = '/shoppingcarts/GET_ITEMS';
const REMOVE_ITEM_FROM_THE_CART = '/shoppingcarts/REMOVE_ITEMS';

const addToCart = (item) => {
    return {
        type: ADD_ITEM_TO_THE_CART,
        payload: item,
    };
};

export const addItemToTheCart = (cartId, productId, shopperId, price) => { 
    return async(dispatch) => {
        const response = await fetch(`/api/shoppingcarts`, {
            method: 'POST',
            body: JSON.stringify({
                cartId,
                productId,
                shopperId,
                price
            }),
        });

        dispatch (
            addToCart(response.data.item)
            );
    }   
}

export const buyItems = (id) => {
    return {
        type: BUY_ITEMS,
        payload: id
    };
};


const getCartItems = (cartItems) => {
    return {
        type: ITEMS_IN_THE_CART,
        cartItems: cartItems,
    };
};

export const fetchAllCartItems = (id) => {
    return async (dispatch) => {
        const response = await fetch(`/api/shoppingcarts/${id}`);
        dispatch (
            getCartItems(response.data.cartItems)
        );
    };
};

const removeItem = (item) => {
    return {
        type: REMOVE_ITEM_FROM_THE_CART,
        payload: item
    }
}

export const removeItemFromTheCart = (id) => async (dispatch) => {
    const response = await fetch(`/api/shoppingcarts/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
    dispatch(removeItem(id))
    }
    return response
}

const initialState = {};

const cartReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case ADD_ITEM_TO_THE_CART:
            return {
                ...state,
                [action.id]: action.payload
            };
        case BUY_ITEMS:
            return {};
        case ITEMS_IN_THE_CART:
            newState = {};
            action.cartItems.forEach(item => {
                newState[item.id] = item;
            })
            return newState;
        case REMOVE_ITEM_FROM_THE_CART: 
            newState = {...state}
            delete newState[action.item]
            return newState;
        default:
            return state;
        };
};

export default cartReducer;