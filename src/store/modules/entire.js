import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEntireRoomsList } from "@/api/modules/entire";
export const fetchRoomListAction = createAsyncThunk(
  "fetchEntireData",
  async (payload = 0, { dispatch }) => {
    const page = payload;
    // get the latest page
    dispatch(changeCurrentPageAction(page));
    //get the latest data by page
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomsList(page * 20);
    dispatch(changeIsLoadingAction(false));
    console.log("entire data---------------------", res);

    // save states in redux
    const roomList = res.list;
    const totalCount = res.totalCount;
    // console.log(roomList);
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
    // console.log(totalCount);
  }
);

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
    isLoading: false,
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    },
    changeRoomListAction(state, { payload }) {
      // console.log("changeRoomListAction payload:", payload);
      state.roomList = payload;
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload;
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const {
  changeCurrentPageAction,
  changeRoomListAction,
  changeTotalCountAction,
  changeIsLoadingAction,
} = entireSlice.actions;

export default entireSlice.reducer;
