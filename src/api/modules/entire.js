import myRequest from "..";
export const getEntireRoomsList = (offset = 0, size = 20) => {
  return myRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
};
