import React from "react";
import { StyledFooterContainer, StyledNavLink } from "./Footer.styled";
import { getYear } from "../../helpers/getYear";
import ccs from "../../../img/credit-cards-icons.png";
import { app } from "../../constants/app";
import { routes } from "../../constants/routes";
import { scrollToTop } from "../../helpers/scrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../svg/Logo";

const socialLinks = [
  { icon: faFacebook, url: "//facebook.com/scudowallets" },
  { icon: faInstagram, url: "//instagram.com/mgw_scudo" },
  { icon: faYoutube, url: "//www.youtube.com/user/MGWINC" }
];

const Footer = () => {
  return (
    <StyledFooterContainer>
      <div className={"social-links"}>
        {socialLinks.map((link, index) => (
          <a
            href={link.url}
            target={"_blank"}
            rel={"noopener noreferrer"}
            key={`footer-social-${index}`}
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
        <p>Connect With Us</p>
      </div>
      <div className={"flex-container"}>
        <div id={"footer-logo"}>
          <Logo />
        </div>
        <div>
          {Object.keys(routes).map((route, index) => (
            <StyledNavLink
              onClick={scrollToTop}
              to={routes[route].path}
              key={`navLink-${index}`}
            >
              {routes[route].title}
            </StyledNavLink>
          ))}
        </div>
        <div>
          <span>MGW {app.scudo}</span>
          <span>{app.phone}</span>
          <span>4159 Mike Padgett Highway</span>
          <span>Augusta, GA 30906</span>
        </div>
      </div>
      <div className={"copyright"}>
        <p>
          <img src={ccs} alt="We accept Visa, MasterCard, and Discover" />
        </p>
        <span>&copy; {getYear()} MGW LTD. All Rights Reserved.</span>
      </div>
    </StyledFooterContainer>
  );
};

export default Footer;
