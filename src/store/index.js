import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./modules/main";
import homeReducer from "./modules/home";
import detailReducer from "./modules/detail";
import entireReducer from "./modules/entire";
const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
  },
});

export default store;
