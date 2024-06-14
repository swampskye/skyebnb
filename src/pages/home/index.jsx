import React, { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./children/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionv1 from "./children/HomeSectionv1";
import SectionHeader from "@/components/SectionHeader";
import SectionRooms from "./children/SectionRooms";
import SectionTaps from "@/components/SectionTaps";
import HomeSectionV2 from "./children/HomeSectionv2";
import { isEmptyO } from "@/utils/isEmptyO";
const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual
  );

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxxx"));
  }, [dispatch]);

  // const [selectedName, setSelectedName] = useState("佛山");
  // const tabTitles = discountInfo.dest_address?.map((item) => item.name);
  // const tabClickHandle = useCallback((index, item) => {
  //   setSelectedName(item);
  // }, []);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* <HomeSectionV2 infoData={discountInfo} /> */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}

        {/* goodPriceInfo */}
        <HomeSectionv1 infoData={goodPriceInfo} />
        {/* highScoreInfo */}
        <HomeSectionv1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
