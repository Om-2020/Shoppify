import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartslice',
    initialState:{
        items:[],
    },
    reducers:{
        addItems: (state,action)=>{
            state.items.push(action.payload);
        },
        removeItems: (state,action)=>{
            const itemid = action.payload;
            state.items=state.items.filter(item=>item.id!==itemid);
            //console.log(state.items);
        },
        clearCart: (state,action)=>{
            state.items.length=0;
        }

    }
});

export const {addItems,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer;