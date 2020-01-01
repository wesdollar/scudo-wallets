import React from "react";
import { StyledContainer } from "./PageNotFound.styled";
import NetflixScroll from "../../components/NetflixScroll/NetflixScroll";
import TopFeatures from "../../components/TopFeatures/TopFeatures";
import Content from "../../components/Content/Content";
import { app } from "../../constants/app";
import Helmet from "react-helmet";

const PageNoteFound = () => (
  <React.Fragment>
    <Helmet>
      <title>{`${app.name} | Page Not Found`}</title>
    </Helmet>
    <StyledContainer>
      <Content>
        <h1>Ut oh! You&apos;ve ventured into the unknown!</h1>
        <p className={"large-text"}>
          The page you&apos;re looking for does not exist or has been relocated.
          But, you can keep shopping below!
        </p>
        <p className={"small-text"}>
          If you need some help, feel free to give us a call {app.phone}.
          Mention error code 404 (which just means the page wasn&apos;t found).
        </p>
      </Content>
    </StyledContainer>
    <NetflixScroll />
    <TopFeatures />
  </React.Fragment>
);

export default PageNoteFound;
