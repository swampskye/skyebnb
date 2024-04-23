import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import detailReducer from "./modules/detail";
import entireReducer from "./modules/entire";
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
  },
});

export default store;
