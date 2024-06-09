import myRequest from "..";

export const getHomeGoodPriceData = () => {
  return myRequest.get({
    url: "/home/goodprice",
  });
};
