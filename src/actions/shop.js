import {
    SET_SHOP_PRODUCTS
} from './types';


export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: "Warped Smiley",
                graphic: require("../../static/assets/images/graphic1.png"),
                description: "Red, warped smileys with a blue background",
                price: 0.99,
            },
            {
                _id: 1,
                title: "Handle with Care",
                graphic: require("../../static/assets/images/graphic2.png"),
                description: "Hands and heart with 'Handle with Care' text",
                price: 0.99,
            },
            {
                _id: 2,
                title: "Smile! You're on Camera",
                graphic: require("../../static/assets/images/graphic3.png"),
                description: "Smiley face with 'Smile! You're on camera' text",
                price: 0.99,
            },
            {
                _id: 3,
                title: "Better Days Ahead",
                graphic: require("../../static/assets/images/graphic4.png"),
                description: "Scorpion with a palm tail and sun in the background",
                price: 2.99,
            },
            {
                _id: 4,
                title: "Scorpion",
                graphic: require("../../static/assets/images/graphic5.png"),
                description: "Black scorpion graphic",
                price: 1.99,
            },
        ]
    })
}