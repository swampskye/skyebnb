import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import filterData from "@/assets/data/filter_data.json";
import { EntireFilterWrapper } from "./style";
import classNames from "classnames";
const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);
  const itemClickHandle = (item) => {
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex((filterItem) => filterItem === item);
      newItems.splice(itemIndex, 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  };
  return (
    <EntireFilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </EntireFilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
