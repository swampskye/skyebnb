import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "@/components/RoomItem";
import { SectinRoomsWraper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props;
  // console.log(roomList);
  return (
    <div>
      <SectinRoomsWraper>
        {roomList.slice(0, 8)?.map((item) => (
          <RoomItem itemData={item} itemWidth={itemWidth} key={item.id} />
        ))}
      </SectinRoomsWraper>
    </div>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
