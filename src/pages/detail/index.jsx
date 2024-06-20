// import { changeHeaderConfigAction } from "@/store/modules/main";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import DetailInfo from "./DetailInfo";
import DetailPictures from "./DetailPictures";
import { changeHeaderConfigAction } from "@/store/modules/main";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }));
  }, [dispatch]);

  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfo />
    </DetailWrapper>
  );
});

export default Detail;
