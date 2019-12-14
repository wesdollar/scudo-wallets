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

const getProducts = () => {
  return sortBy(vectors, "title");
};

const ProductsList = () => {
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
        <LazyLoad offset={200} once>
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

export default ProductsList;
