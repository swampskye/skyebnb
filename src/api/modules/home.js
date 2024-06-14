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
