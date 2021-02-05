import { apiCall } from "./api"
import { resolve } from "./resolve";
import { CART_COUNT } from "./types";

const getProducts = () => async dispatch => {
    const data = await apiCall.get('product/allProducts');
    // if(data.success) {
    //     dispatch({
    //         type: CART_COUNT,
    //         payload: 1
    //     });
    // }
    return (data.success) ? data : data;
}

const updateCart = (count) => async dispatch => {
    const data = await apiCall.get('product/allProducts');
    if(data.success) {
        dispatch({
            type: CART_COUNT,
            payload: count
        });
    }
    return (data.success) ? data : data;
}

export {
    getProducts, updateCart
}