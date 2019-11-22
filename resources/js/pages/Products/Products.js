import React from "react";
import { StyledContainer } from "../../components/AllProducts/AllProducts.styled";
import ProductsList from "../../components/ProductsList/ProductsList";
import Content from "../../components/Content/Content";

const Products = () => (
  <Content>
    <StyledContainer>
      <ProductsList />
    </StyledContainer>
  </Content>
);

export default Products;
