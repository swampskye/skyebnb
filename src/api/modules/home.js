import myRequest from "..";

export const getHomeGoodPriceData = () => {
  return myRequest.get({
    url: "/home/goodprice",
  });
};

export const getHomeHighScoreData = () => {
  return myRequest.get({ url: "/home/highscore" });
};

export const getHomeDiscountData = () => {
  return myRequest.get({ url: "/home/discount" });
};

export const getHomeRecommendData = () => {
  return myRequest.get({ url: "/home/hotrecommenddest" });
};

export const getHomeLongForData = () => {
  return myRequest.get({ url: "/home/longfor" });
};

export const getHomePlusData = () => {
  return myRequest.get({ url: "/home/plus" });
};
