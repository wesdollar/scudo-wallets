import React, { useEffect, useState } from "react";
import { StyledContainer, StyledHeader2 } from "./ProductDetails.styled";
import { getImageFilePath } from "../../helpers/getImageFilePath";
import { vectors } from "../../mockData/products";
import { getSlug } from "../../helpers/getSlug";
import { Redirect, useParams } from "react-router-dom";
import NetflixScroll from "../../components/NetflixScroll/NetflixScroll";
import { routes } from "../../constants/routes";
import { scrollToTop } from "../../helpers/scrollToTop";
import AddToCart from "../../components/AddToCart/AddToCart";
import { fieldId } from "../../constants/fieldIds";
import Helmet from "react-helmet";
import { app } from "../../constants/app";

const ProductDetails = () => {
  const { productSlug } = useParams();
  const [product] = vectors.filter(
    product => getSlug(product.title) === productSlug
  );
  const { title, type, description, wideImage = false } = product;
  const [handleFeatureClick, setHandleFeatureClick] = useState(false);

  useEffect(() => {
    return () => {
      setHandleFeatureClick(false);
    };
  }, [handleFeatureClick]);

  useEffect(() => {
    document.getElementById(fieldId.completeSmall).checked = false;
    document.getElementById(fieldId.completeMedium).checked = false;
    document.getElementById(fieldId.completeLarge).checked = false;
  }, [product]);

  if (handleFeatureClick) {
    scrollToTop();

    return (
      <Redirect
        push
        to={{
          pathname: `${routes.features.path}`
        }}
      />
    );
  }

  const imgSrc = getImageFilePath(title);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${title} | ${app.scudo} Vector Wallets`}</title>
      </Helmet>
      <StyledContainer wideImage={wideImage}>
        <div className={"img-container"}>
          <img src={imgSrc} alt={`${title}`} />
        </div>
        <div className={"product-details"}>
          <StyledHeader2>{title}</StyledHeader2>
          <div className={"wrap-type"}>{type} Wrap</div>
          {description && description.length && <p>{description}</p>}
          <AddToCart
            setHandleFeatureClick={setHandleFeatureClick}
            productTitle={title}
            productType={type}
          />
        </div>
      </StyledContainer>
      <NetflixScroll />
    </React.Fragment>
  );
};

export default ProductDetails;
