import PropTypes from "prop-types";
import React, { memo } from "react";
import { EntireRoomsWrapper } from "./style";
import RoomItem from "@/components/RoomItem";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  console.log("roomlist.length() ----->", roomList.length);
  //   const navigator = useNavigate();
  //   const itemClickHandle = () => {
  //     navigator("/detail");
  //   };
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
              // itemClick={itemClickHandle}
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
