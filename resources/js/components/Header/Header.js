import React from "react";
import {
  StyledHeader,
  StyledLogoContainer,
  StyledNavContainer,
  StyledNavLink,
  StyledPhoneContainer
} from "./Header.styled";
import { routes } from "../../constants/routes";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../helpers/scrollToTop";
import { app } from "../../constants/app";

const Header = () => (
  <StyledHeader>
    <StyledLogoContainer>
      <span>
        <Link to={"/react"}>SCUDO</Link>
      </span>
    </StyledLogoContainer>
    <StyledNavContainer>
      {Object.keys(routes).map((route, index) => (
        <StyledNavLink
          onClick={scrollToTop}
          to={routes[route].path}
          key={`navLink-${index}`}
        >
          {route}
        </StyledNavLink>
      ))}
    </StyledNavContainer>
    <StyledPhoneContainer>
      <span>{app.phone}</span>
    </StyledPhoneContainer>
  </StyledHeader>
);

export default Header;
