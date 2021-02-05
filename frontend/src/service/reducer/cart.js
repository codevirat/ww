import { CART_COUNT } from "../action/types";

// state initialization
const initialState = {
    count: 0
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch ( type ) {
        case CART_COUNT: {
            return {
                ...state, count: payload
            }
        }
        default:
            return state
    }
}