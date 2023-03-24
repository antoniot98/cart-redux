import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartElement: 0,
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartElement += 1;
      state.cartList.push(action.payload);
    },
    remToCart: (state, action) => {
      state.cartElement -= 1;
      state.cartList = state.cartList.filter(
        (el) => el.index !== action.payload
      );
    },
  },
});

export const cartAction = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
