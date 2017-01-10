import { SET_PRODUCTS } from '../actions/productActions';

export default function product(state = [], action = {}) {

    switch(action.type) {
        case SET_PRODUCTS:
            return action.products;
        default: return state;
    }
}
