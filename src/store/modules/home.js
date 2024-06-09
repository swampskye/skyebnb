import { getHomeGoodPriceData } from "@/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchHomeDataAction = createAsyncThunk(
//   "fetchData",
//   async (payload) => {
//     const res = await getHomeGoodPriceData();
//     return res;
//   }
// );

export const fetchHomeDataAction = createAsyncThunk(
  "fetchData",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload;
  //   },
  // },
});

export const { changeGoodPriceInfoAction } = homeSlice.actions;

export default homeSlice.reducer;
