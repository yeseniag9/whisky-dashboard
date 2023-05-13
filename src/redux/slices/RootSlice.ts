import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        country: "Country",
        type: "Type",
        abv: "ABV"
    },
    reducers: { 
        chooseName: (state, action) => { state.name = action.payload }, 
        chooseCountry: (state, action) => { state.country = action.payload }, 
        chooseType: (state, action) => { state.type = action.payload }, 
        chooseABV: (state, action) => { state.abv = action.payload }
    }
})

export const reducer = rootSlice.reducer; 
export const { chooseName, chooseCountry, chooseType, chooseABV } = rootSlice.actions