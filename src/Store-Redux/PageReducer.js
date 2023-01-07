import { createSlice } from "@reduxjs/toolkit";

const pageData = {
  items: [],
  totalAmount: 0,
};

const pageSlice = createSlice({
  name: "auth",
  initialState: pageData,
  reducers: {
   
   
  }
});

export const pageActions = pageSlice.actions;
export default pageSlice.reducer;
