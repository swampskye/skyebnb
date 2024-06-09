import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./children/header-left";
import HeaderCenter from "./children/header-center";
import HeaderRight from "./children/header-right";
const Herder = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default Herder;
