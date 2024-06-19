import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";
const Indicator = memo((props) => {
  const { selectedIndex } = props;
  const contentRef = useRef();
  useEffect(() => {
    const selectedItem = contentRef.current.children[selectedIndex];

    const offsetLeft = selectedItem.offsetLeft;
    const itemWidth = selectedItem.clientWidth;
    const contentWidth = contentRef.current.clientWidth;
    const scrollWidth = contentRef.current.scrollWidth;
    const totalDistance = scrollWidth - contentWidth;

    let distance = offsetLeft + itemWidth * 0.5 - contentWidth * 0.5;

    // left
    if (distance < 0) {
      distance = 0;
    }
    // right
    if (distance > totalDistance) {
      distance = totalDistance;
    }
    // translate
    contentRef.current.style.transform = `translate(${-distance}px)`;

    // console.log(selectedIndex);
    // console.log(offsetLeft);
    // console.log(distance);
  }, [selectedIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectedIndex: PropTypes.number,
};

export default Indicator;
