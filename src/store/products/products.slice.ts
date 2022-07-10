import { IProduct } from "../../types"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface ProductState {
    products: IProduct[],
    filteredProducts : IProduct[],
    isLoading:boolean,
    error:string
}

const initialState:ProductState = {
    products: [],
    filteredProducts: [],
    isLoading: false,
    error:''
}

export const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers: {
        startFetching(state){
            state.isLoading = true
        },
        successFetching(state, action: PayloadAction<IProduct[]>){
            state.products = action.payload
            state.isLoading = false
            state.error = ''
            state.filteredProducts = action.payload
        },
        errorFetching(state, action:PayloadAction<string>){
            state.error = action.payload
            state.isLoading = false
        },
        filterByCategory(state,action:PayloadAction<string[]>){
            if(action.payload.length === 0 || action.payload.includes('All'))
            {
                state.filteredProducts = state.products
            }
            else {
                state.filteredProducts = state.products.filter(
                    (products) =>action.payload.includes(products.category))
            }
        },

    }
})

export const {
    startFetching,
    successFetching,
    errorFetching,
    filterByCategory
} = productSlice.actions

export default productSlice.reducer