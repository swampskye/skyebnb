import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongForItemWrapper } from "./style";

const LongForItem = memo((props) => {
  const { data } = props;
  return (
    <LongForItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="cover" src={data.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{data.city}</div>
            <div className="price">{data.price}</div>
          </div>
        </div>
      </div>
    </LongForItemWrapper>
  );
});

LongForItem.propTypes = {
  data: PropTypes.object,
};

export default LongForItem;
