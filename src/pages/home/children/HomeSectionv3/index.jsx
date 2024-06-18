import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeSectionv3Wrapper } from "./style";
import SectionHeader from "@/components/SectionHeader";
import RoomItem from "@/components/RoomItem";
import ScrollView from "@/baseUI/ScrollView";
import SectionFooter from "@/components/SectionFooter";

const HomeSectionv3 = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionv3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list?.map((item) => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id} />;
          })}
        </ScrollView>
      </div>
      <SectionFooter />
    </HomeSectionv3Wrapper>
  );
});

HomeSectionv3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionv3;
