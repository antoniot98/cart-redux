import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartElement: 0,
  cartList: [],
  total: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartElement += 1;
      state.cartList.push(action.payload);
      state.total = state.cartList.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    },
    remToCart: (state, action) => {
      state.cartElement -= 1;
      state.cartList = state.cartList.filter(
        (el) => el.index !== action.payload
      );
      state.total = state.cartList.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
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
