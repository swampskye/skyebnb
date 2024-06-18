import PropTypes from "prop-types";
import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";

import { EntirePaginationWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire";

const EntirePagination = memo((props) => {
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );

  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  const dispatch = useDispatch();
  const pageChangeHandle = (event, pageCount) => {
    // 回到顶部
    window.scrollTo(0, 0);
    // 更新最新的页码: redux => currentPage
    // dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchRoomListAction(pageCount - 1));
  };

  return (
    <EntirePaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      )}
    </EntirePaginationWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;
