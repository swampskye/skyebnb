// import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ScrollViewWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [positionIndex, setPositionIndex] = useState(0);
  const distanceRef = useRef();
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const distance = scrollWidth - clientWidth;
    distanceRef.current = distance;
    if (distance > 0) {
      setShowRightBtn(true);
    }
  }, []);

  //   event control logic
  const scrollClick = (isRight) => {
    const newIndex = isRight ? positionIndex + 1 : positionIndex - 1;
    const newItem = scrollContentRef.current.children[newIndex];
    const newItemOffsetLeft = newItem.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newItemOffsetLeft}px)`;
    setPositionIndex(newIndex);
    setShowRightBtn(distanceRef.current > newItemOffsetLeft);
    setShowLeftBtn(newItemOffsetLeft > 0);
  };
  return (
    <ScrollViewWrapper>
      {showLeftBtn && (
        <div className="control left" onClick={() => scrollClick(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRightBtn && (
        <div className="control right" onClick={() => scrollClick(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div ref={scrollContentRef} className="scroll-content">
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
