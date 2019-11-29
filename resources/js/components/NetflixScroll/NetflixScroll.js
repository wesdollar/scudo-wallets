import React from "react";
import { StyledContainer, StyledScrollContainer } from "./NetflixScroll.styled";
import ProductsList from "../ProductsList/ProductsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const netflixScrollContainerId = "netflix-scroll-container";

const getNetflixWidth = () => {
  return document.getElementById(netflixScrollContainerId).offsetWidth;
};

const getCurrentScrollPosition = () => {
  return document.getElementById(netflixScrollContainerId).scrollLeft;
};

const netflixScroll = direction => {
  const width = getNetflixWidth();
  const currentScrollPosition = getCurrentScrollPosition();
  // eslint-disable-next-line no-magic-numbers
  const scrollOffset = 100;
  let scrollTo;

  if (direction === "left") {
    scrollTo = currentScrollPosition - (width - scrollOffset);
  } else {
    scrollTo = currentScrollPosition + (width - scrollOffset);
  }

  return document
    .getElementById(netflixScrollContainerId)
    .scrollTo({ left: scrollTo, behavior: "smooth" });
};

const NetflixScroll = () => (
  <StyledContainer>
    <StyledScrollContainer id={netflixScrollContainerId}>
      <ProductsList />
    </StyledScrollContainer>
    <div className={"scroll-buttons"}>
      <FontAwesomeIcon
        onClick={() => netflixScroll("left")}
        icon={faCaretLeft}
      />
      <FontAwesomeIcon
        onClick={() => netflixScroll("right")}
        icon={faCaretRight}
      />
    </div>
  </StyledContainer>
);

export default NetflixScroll;
