import { combineReducers, legacy_createStore as createStore } from "redux";
import productReducer from "../reduces/product";

const rootProduct = combineReducers({
    products: productReducer,
})

const store = createStore(rootProduct);

export default store;

