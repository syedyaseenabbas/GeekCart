import {configureStore, combineReducers} from "@reduxjs/toolkit"
import productReducers from "../store/products/products.slice"

const rootReducer = combineReducers({
    productReducers
})

export const store = configureStore({
    reducer: rootReducer
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch