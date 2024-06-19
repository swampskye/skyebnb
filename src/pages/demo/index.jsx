import React, { memo, useState } from "react";
import Indicator from "@/baseUI/Indicator";
import { DemoWrapper } from "./style";
const Demo = memo(() => {
  const names = ["111", "222", "333", "444", "555", "666", "777", "888", "999"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const toggleClickHandle = (isRight = true) => {
    let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1;
    if (newIndex < 0) {
      newIndex = names.length - 1;
    }
    if (newIndex > names.length - 1) {
      newIndex = 0;
    }
    setSelectedIndex(newIndex);
  };
  return (
    <DemoWrapper>
      <div className="">
        <button onClick={(e) => toggleClickHandle(false)}>left</button>
        <button onClick={(e) => toggleClickHandle(true)}>right</button>
      </div>
      <div className="list">
        <Indicator selectedIndex={selectedIndex}>
          {names.map((item) => {
            return <button>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});
Demo.propTypes = {};
export default Demo;
