import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";
import ScrollView from "@/baseUI/ScrollView";

const SectionTaps = memo((props) => {
  const { tabTitles = [], tabClick } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemClickHandle = (index, item) => {
    // console.log(index);
    setSelectedIndex(index);
    tabClick(index, item);
  };

  return (
    <TabsWrapper>
      <ScrollView>
        {tabTitles.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames("item", {
                active: index === selectedIndex,
              })}
              onClick={(e) => itemClickHandle(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTaps.propTypes = {
  tabTitles: PropTypes.array,
};

export default SectionTaps;
