import { ActionTypes } from "../constatnts/action-type"

export const setProducts = (products) => {
    return{
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const selectedProducts = (product) => {
    return{
        type : ActionTypes.SELECTED_PRODUCT,
        payload : product
    }
}

export const removeProducts = (products) => {
    return{
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload : products
    }
}