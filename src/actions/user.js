import { $CombinedState } from 'redux';
import {
    SET_CART_PRODUCTS
} from './types';

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: "",
                title: "",
                price: "",
            },
        ]
    })
}