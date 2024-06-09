import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./children/home-banner";
import SectionHeader from "@/components/SectionHeader";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionRooms from "./children/SectionRooms";

const Home = memo(() => {
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
        <div className="good-price">
          <SectionHeader title="Title" subtitle="subtitle" />
          <SectionRooms roomList={goodPriceInfo} />
        </div>
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
