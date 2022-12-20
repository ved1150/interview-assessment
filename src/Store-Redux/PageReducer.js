import { createSlice } from "@reduxjs/toolkit";

const pageData = {
  items: [],
  totalAmount: 0,
};

const pageSlice = createSlice({
  name: "auth",
  initialState: pageData,
  reducers: {
    addItemToCartHandler(state, action) {
      let item = action.payload;
      const updatedTotalAmount = state.totalAmount + item.price * item.amount;
      // if(state.items.length == 0){
      //   updatedItems = state.items.concat(item);
      // }
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let a = state.items.map((x) => {
        if(x.id == item.id) {
          return true
        }
        else{
         return false
        } 
       } )
       let b = a[0]
      console.log(b)
      let updatedItems;

      if (b) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        console.log( item)
      } else {
        console.log( item)
        updatedItems = state.items.concat(item);
      }
      
      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },
    removeItemFromCartHandler(state ,action){
      let id  = action.payload;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
  
      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
    }
  },
    order(state){
      state.item = []
    }
});

export const pageActions = pageSlice.actions;
export default pageSlice.reducer;
