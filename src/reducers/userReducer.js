import {
    SET_CART_PRODUCTS
} from '../actions/types';

const INITIAL_STATE = {
    cartProducts: []
}


export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: action.payload
            }
         default: return state;
    }
}