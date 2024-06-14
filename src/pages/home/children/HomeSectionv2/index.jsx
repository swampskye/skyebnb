import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import { Sectionv2Wrapper } from "./style";
import SectionHeader from "@/components/SectionHeader";
import SectionRooms from "../SectionRooms";
import SectionTaps from "@/components/SectionTaps";

const HomeSectionv2 = memo((props) => {
  // props
  const { infoData } = props;
  // inner
  const initialName = Object.keys(infoData.dest_list)[0];
  const tabTitles = infoData.dest_address?.map((item) => item.name);
  const [selectedName, setSelectedName] = useState(initialName);
  const tabClickHandle = useCallback((index, item) => {
    setSelectedName(item);
  }, []);
  return (
    <Sectionv2Wrapper>
      <div className="discount">
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
        <SectionTaps tabTitles={tabTitles} tabClick={tabClickHandle} />
        <SectionRooms
          roomList={infoData.dest_list?.[selectedName]}
          itemWidth={"33.33%"}
        />
      </div>
    </Sectionv2Wrapper>
  );
});

HomeSectionv2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionv2;
