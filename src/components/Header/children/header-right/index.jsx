import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";

import IconAvatar from "@/assets/svg/icon_avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
const HeaderRight = memo(() => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    let handleWindowClick = () => {
      setIsShow(false);
    };
    window.addEventListener("click", handleWindowClick, true);
    return () => {
      window.removeEventListener("click", handleWindowClick, true);
    };
  }, []);
  // useEffect(() => {
  //   let handleWindowClick = () => {
  //     setIsShow(false);
  //   };
  //   window.addEventListener("click", handleWindowClick, true);
  //   return () => {
  //     window.removeEventListener("click", handleWindowClick, true);
  //   };
  // }, [isShow]);
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">Sign in</span>
        <span className="btn">Sign up</span>
        <span className="btn">
          <IconGlobal />
        </span>
        <span className="profile" onClick={() => setIsShow(true)}>
          <IconMenu />
          <IconAvatar />
          {isShow && (
            <div className="panel">
              <div className="top">
                <div className="item">signin</div>
                <div className="item">signup</div>
              </div>
              <div className="bottom">
                <div className="item">rent</div>
                <div className="item">experience</div>
                <div className="item">help</div>
              </div>
            </div>
          )}
        </span>
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
