import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { EntireRoomsWrapper } from "./style";
import RoomItem from "@/components/RoomItem";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";
const EntireRooms = memo((props) => {
  //   const { roomList = [], totalCount = 0, isLoading = false } = props;
  const { totalCount, roomList, isLoading } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      roomList: state.entire.roomList,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );
  // console.log("roomlist.length() ----->", roomList.length);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const itemClickHandle = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item));
      navigator("/detail");
      console.log(item);
    },
    [navigator]
  );
  return (
    <EntireRoomsWrapper>
      <div className="title">{totalCount}多处住所</div>
      <div className="list">
        {roomList.map((item, index) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item._id}
              itemClick={(e) => itemClickHandle(item)}
            />
          );
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  );
});

EntireRooms.propTypes = {};

export default EntireRooms;
