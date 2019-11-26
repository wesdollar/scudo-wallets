import React from "react";
import { StyledCalloutSection } from "../Home/Home.styled";
import NetflixScroll from "../../components/NetflixScroll/NetflixScroll";
import TopFeatures from "../../components/TopFeatures/TopFeatures";
import Content from "../../components/Content/Content";
import Youtube from "../../components/Youtube/Youtube";
import { StyledSplitContent } from "./Features.styled";

const Features = () => {
  return (
    <React.Fragment>
      <Content alternateBackground={true}>
        <StyledSplitContent>
          <div>
            <p>
              Designed to hold exactly what your life needs. Fits in your
              pocket, handles nicely in your hand. Packs cards, cash, and those
              personal touches in an easy-to-open, convenient to find, yet
              completely secure package.
            </p>
          </div>
          <div>
            <Youtube videoId={"l4Z5WH7y6Lg"} />
          </div>
        </StyledSplitContent>
        <StyledSplitContent>
          <div>
            <Youtube videoId={"HfBPpcCexhc"} />
          </div>
          <div>
            <p>
              Interchangable bases and lids mean you can carry what suits your
              mood. Bases are available in three sizes - 10, 14, or 18
              card-carrying capacity. As for the lids, you&apos;ll just have to
              collect them all.
            </p>
          </div>
        </StyledSplitContent>
      </Content>
      <TopFeatures />
      <StyledCalloutSection>
        <NetflixScroll />
      </StyledCalloutSection>
    </React.Fragment>
  );
};

export default Features;
