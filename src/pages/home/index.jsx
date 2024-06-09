import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./children/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";

const Home = memo(() => {
  // const { goodPriceInfo } = useSelector(
  //   (state) => ({
  //     goodPriceInfo: state.home.goodPriceInfo,
  //   }),
  //   shallowEqual
  // );

  /** 从redux中获取数据 */
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxxx"));
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <ul>
          {goodPriceInfo.list?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </HomeWrapper>
  );
});

export default Home;

// const Home = memo(() => {
//   const [highscore, setHighscore] = useState({});
//   useEffect(() => {
//     myRequest.get({ url: "home/highscore" }).then((res) => {
//       console.log(res);
//       setHighscore(res);
//     });
//   }, []);
//   return (
//     <div>
//       <h2>{highscore.title}</h2>
//       <h4>{highscore.subtitle}</h4>
//       <ul>
//         {highscore.list?.map((item) => {
//           return <li key={item.id}>{item.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// });
