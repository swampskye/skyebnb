import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "@/components/RoomItem";
import { SectinRoomsWraper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [] } = props;
  return (
    <div>
      <SectinRoomsWraper>
        {roomList.list?.slice(0, 8).map((item) => (
          <RoomItem itemData={item} key={item.id} />
        ))}
      </SectinRoomsWraper>
    </div>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
