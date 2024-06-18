import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeLongForWrapper } from "./style";
import SectionHeader from "@/components/SectionHeader";
import LongForItem from "@/components/LongForItem";
import ScrollView from "@/baseUI/ScrollView";

const HomeLongFor = memo((props) => {
  const { infoData } = props;
  //   console.log("infoData:", infoData);
  return (
    <HomeLongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongForItem data={item} />;
          })}
        </ScrollView>
      </div>
    </HomeLongForWrapper>
  );
});

HomeLongFor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongFor;
