import React from "react";
import { StyledContainer } from "../../components/AllProducts/AllProducts.styled";
import ProductsList from "../../components/ProductsList/ProductsList";
import Content from "../../components/Content/Content";
import Helmet from "react-helmet";
import { routes } from "../../constants/routes";

const Products = () => (
  <React.Fragment>
    <Helmet>
      <title>{routes.products.metaTitle}</title>
    </Helmet>
    <Content>
      <StyledContainer>
        <ProductsList />
      </StyledContainer>
    </Content>
  </React.Fragment>
);

export default Products;
