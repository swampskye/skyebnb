import PropTypes from "prop-types";
import React, { memo } from "react";
import { Sectionv1Wrapper } from "./style";
import SectionHeader from "@/components/SectionHeader";
import SectionRooms from "../SectionRooms";
import SectionFooter from "@/components/SectionFooter";

const HomeSectionv1 = memo((props) => {
  const { infoData } = props;
  return (
    <Sectionv1Wrapper>
      {/* <div className="good-price"> */}
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} itemWidth={"25%"} />
      {/* </div> */}
      <SectionFooter />
    </Sectionv1Wrapper>
  );
});

HomeSectionv1.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionv1;
