import React from "react";
import PropTypes from "prop-types";
import ProductDetails from "../ProductDetails/ProductDetails";
import NetflixScroll from "../NetflixScroll/NetflixScroll";

const ProductPage = ({ activeProduct, handleOnClick, showAllProducts }) => {
  if (showAllProducts) {
    return null;
  }

  return (
    <React.Fragment>
      <ProductDetails product={activeProduct} />
      <NetflixScroll handleOnClick={handleOnClick} />
    </React.Fragment>
  );
};

ProductPage.propTypes = {
  activeProduct: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  showAllProducts: PropTypes.bool.isRequired
};

ProductPage.defaultProps = {
  activeProduct: {},
  handleOnClick: () => {},
  showAllProducts: false
};

export default ProductPage;
