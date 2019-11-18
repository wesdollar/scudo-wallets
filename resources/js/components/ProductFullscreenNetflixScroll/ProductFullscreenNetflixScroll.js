import React from "react";
import {
  StyledContainer,
  StyledScrollImage
} from "./ProductFullscreenNetflixScroll.styled";
import { vectors } from "../../mockData/products";

const ProductFullscreenNetflixScroll = () => (
  <StyledContainer>
    {vectors.map((logo, index) => (
      <StyledScrollImage key={`netflix-${index}`} />
    ))}
  </StyledContainer>
);

export default ProductFullscreenNetflixScroll;
