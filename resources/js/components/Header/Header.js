import React from "react";
import {
  StyledHeader,
  StyledLogoContainer,
  StyledNavContainer,
  StyledNavLink,
  StyledPhoneContainer
} from "./Header.styled";
import { scudo } from "../../constants/scudo";
import { route } from "../../constants/routes";

const navLinks = [
  { title: "Shop Wallets" },
  { title: "Wallet Features" },
  { title: "FAQs" },
  { title: "About" },
  { title: "Contact" }
];

const Header = () => (
  <StyledHeader>
    <StyledLogoContainer>
      <span>SCUDO</span>
    </StyledLogoContainer>
    <StyledNavContainer>
      {navLinks.map((navLink, index) => (
        <StyledNavLink to={route.products} key={`navLink-${index}`}>
          {navLink.title}
        </StyledNavLink>
      ))}
    </StyledNavContainer>
    <StyledPhoneContainer>
      <span>{scudo.phone}</span>
    </StyledPhoneContainer>
  </StyledHeader>
);

export default Header;
