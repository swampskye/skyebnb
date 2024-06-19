import React, { memo } from "react";
import { useSelector } from "react-redux";

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));
  return <div>{detailInfo.name}</div>;
});

Detail.propTypes = {};
export default Detail;
