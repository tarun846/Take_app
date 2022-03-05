import { combineReducers } from "redux";
import { productReducer ,  selectedproductReducer } from "./productReducer";

export const reducer  = combineReducers({
allproducts : productReducer,
product :  selectedproductReducer,
})