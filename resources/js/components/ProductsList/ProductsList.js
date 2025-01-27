import React, { useState, useEffect } from "react";
import { vectors } from "../../mockData/products";
import { StyledContainer } from "./ProductsList.styled";
import { getImageFilePath } from "../../helpers/getImageFilePath";
import { sortBy } from "lodash";
import { routes } from "../../constants/routes";
import { Redirect } from "react-router-dom";
import { getSlug } from "../../helpers/getSlug";
import { scrollToTop } from "../../helpers/scrollToTop";
import { app } from "../../constants/app";
import PropTypes from "prop-types";

const getProducts = () => {
  return sortBy(vectors, "title");
};

// eslint-disable-next-line no-unused-vars
const ProductsList = ({ isNetflixScroll }) => {
  const [redirect, setRedirect] = useState(false);
  const [selectedProductTitle, setSelectedProductTitle] = useState("");

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

  const handleOnClick = (event, title) => {
    event.preventDefault();
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
        onClick={event => handleOnClick(event, title)}
        tabIndex={0}
        href={`${routes.products.path}/${getSlug(title)}`}
      >
        <img src={imgSrc} alt={`${app.scudo} Wallets Vector ${title}`} />
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
