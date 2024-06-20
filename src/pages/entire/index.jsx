import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./EntireFilter";
import EntireRooms from "./EntireRooms";
import EntirePagination from "./EntirePagination";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Entire = memo((props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

Entire.propTypes = {};

export default Entire;
