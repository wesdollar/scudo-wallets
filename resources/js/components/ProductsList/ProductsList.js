import React, { useState, useEffect } from "react";
import { vectors } from "../../mockData/products";
import { StyledContainer } from "./ProductsList.styled";
import { getImageFilePath } from "../../helpers/getImageFilePath";
import { sortBy } from "lodash";
import { routes } from "../../constants/routes";
import { Redirect } from "react-router-dom";
import { getSlug } from "../../helpers/getSlug";
import { scrollToTop } from "../../helpers/scrollToTop";
import LazyLoad from "react-lazyload";
import { app } from "../../constants/app";
import PropTypes from "prop-types";

const getProducts = () => {
  return sortBy(vectors, "title");
};

const ProductsList = ({ isNetflixScroll }) => {
  const [redirect, setRedirect] = useState(false);
  const [selectedProductTitle, setSelectedProductTitle] = useState("");
  // eslint-disable-next-line no-magic-numbers
  const lazyLoadOffset = isNetflixScroll ? [100, 0] : 200;

  useEffect(() => {
    return () => {
      setRedirect(false);
    };
  }, [redirect]);

  if (redirect) {
    return (
      <Redirect
        push
        to={{
          pathname: `${routes.products.path}/${getSlug(selectedProductTitle)}`
        }}
      />
    );
  }

  const handleOnClick = title => {
    scrollToTop();
    setSelectedProductTitle(title);
    setRedirect(true);
  };
  const products = getProducts();

  return products.map((product, index) => {
    const { title, type } = product;

    if (product.disabled) {
      return null;
    }

    const imgSrc = getImageFilePath(title);

    return (
      <StyledContainer
        key={`product-list-${index}`}
        onClick={() => handleOnClick(title)}
        tabIndex={0}
        role={"button"}
      >
        <LazyLoad offset={lazyLoadOffset} overflow={isNetflixScroll}>
          <img src={imgSrc} alt={`${app.scudo} Wallets Vector ${title}`} />
        </LazyLoad>
        <p>
          {title}
          <span>{type}</span>
        </p>
      </StyledContainer>
    );
  });
};

ProductsList.propTypes = {
  isNetflixScroll: PropTypes.bool
};

ProductsList.defaultProps = {
  isNetflixScroll: false
};

export default ProductsList;
