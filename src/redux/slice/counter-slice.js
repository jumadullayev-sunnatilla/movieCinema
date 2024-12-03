import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 9
    },
    reducers: {
        inc: (state)=>{
            state.value += 1
        },
        dec: (state)=>{
            state.value -= 1
        },
    }
})

export const {inc, dec} = counterSlice.actions
export default counterSlice.reducer

