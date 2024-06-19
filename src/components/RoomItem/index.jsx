import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { RoomItemWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/baseUI/Indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderRef = useRef();
  const controlClickHandle = (isRight = true, event) => {
    isRight ? sliderRef.current.next() : sliderRef.current.prev();
    const length = itemData.picture_urls.length;
    let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1;

    if (newIndex < 0) {
      newIndex = length - 1;
    }
    if (newIndex > length - 1) {
      newIndex = 0;
    }
    setSelectedIndex(newIndex);

    event.stopPropagation();
  };
  const itemClickHandle = () => {
    if (itemClick) {
      itemClick();
    }
  };

  const SliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>

      {/* <img src={itemData.picture_url} alt="" /> */}
      <div className="indicator">
        <Indicator selectedIndex={selectedIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={index}>
                <span
                  className={classNames("dot", {
                    active: selectedIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
  const PictureElemment = (
    <div className="cover">
      <img src={itemData.picture_url} alt="pic" />
    </div>
  );

  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={(e) => itemClickHandle()}
    >
      {itemData.picture_urls ? SliderElement : PictureElemment}
      <div className="inner">
        <div className="desc">{itemData.verify_info.messages.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}/Night</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.5}
            readOnly
            sx={{ fontSize: "12px", color: "#39576a" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info.content}</span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
