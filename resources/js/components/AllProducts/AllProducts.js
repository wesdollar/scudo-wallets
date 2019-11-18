import React from "react";
import PropTypes from "prop-types";
import ProductsList from "../ProductsList/ProductsList";
import { StyledContainer } from "./AllProducts.styled";

const AllProducts = ({ handleOnClick }) => (
  <StyledContainer>
    <ProductsList handleOnClick={handleOnClick} />
  </StyledContainer>
);

AllProducts.propTypes = {
  handleOnClick: PropTypes.func
};

AllProducts.defaultProps = {
  handleOnClick: () => {}
};

export default AllProducts;
