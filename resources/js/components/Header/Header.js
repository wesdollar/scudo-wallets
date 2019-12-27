import React, { useState } from "react";
import {
  StyledHeader,
  StyledLogoContainer,
  StyledNavContainer,
  StyledPhoneContainer
} from "./Header.styled";
import { routes } from "../../constants/routes";
import { Link, NavLink } from "react-router-dom";
import { scrollToTop } from "../../helpers/scrollToTop";
import { app } from "../../constants/app";
import Logo from "../../svg/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <StyledHeader navActive={navActive}>
      <StyledLogoContainer>
        <Link to={"/"}>
          <Logo />
        </Link>
      </StyledLogoContainer>
      <StyledNavContainer navActive={navActive}>
        {Object.keys(routes).map((route, index) => {
          if (routes[route].hideFromNav) {
            return null;
          }

          return (
            <NavLink
              onClick={() => {
                scrollToTop();
                setNavActive(false);
              }}
              to={routes[route].path}
              key={`navLink-${index}`}
            >
              {routes[route].title}
            </NavLink>
          );
        })}
      </StyledNavContainer>
      <StyledPhoneContainer navActive={navActive}>
        <span>{app.phone}</span>
        <div
          className={"mobile-only"}
          role="button"
          onClick={() => setNavActive(!navActive)}
          tabIndex={0}
          onKeyPress={() => setNavActive(!navActive)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </StyledPhoneContainer>
    </StyledHeader>
  );
};

export default Header;
