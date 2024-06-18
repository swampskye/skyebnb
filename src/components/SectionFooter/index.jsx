// import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionFooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { name } = props;
  let showMessage = "Show All";
  if (name) {
    showMessage = `Show more rooms in ${name}`;
  }
  // go to detail page
  const navigator = useNavigate();
  const moreClickHandle = () => {
    navigator("/entire");
  };
  return (
    <SectionFooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <span className="text">{showMessage}</span>
        <IconMoreArrow />
        <span></span>
      </div>
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {};

export default SectionFooter;
