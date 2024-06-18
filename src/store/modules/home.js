import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeLongForData,
  getHomePlusData,
  getHomeRecommendData,
} from "@/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeData",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
    getHomeRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res));
    });
    getHomeLongForData().then((res) => {
      dispatch(changeLongForInfoAction(res));
    });
    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongForInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;

// p1636
