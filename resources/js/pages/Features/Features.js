import React from "react";
import { StyledCalloutSection } from "../Home/Home.styled";
import NetflixScroll from "../../components/NetflixScroll/NetflixScroll";
import TopFeatures from "../../components/TopFeatures/TopFeatures";

const Home = () => {
  return (
    <React.Fragment>
      <TopFeatures />
      <StyledCalloutSection>
        <NetflixScroll />
      </StyledCalloutSection>
    </React.Fragment>
  );
};

export default Home;
