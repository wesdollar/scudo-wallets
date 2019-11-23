import React, { useEffect } from "react";
import {
  StyledContainer,
  StyledProductSelect,
  StyledDivider,
  StyledHeader2
} from "./ProductDetails.styled";
import { getImageFilePath } from "../../helpers/getImageFilePath";
import { getPricing, getPricingOptions } from "../../helpers/getPricing";
import { productType } from "../../constants/productTypes";
import { getAddToCartUrl } from "../../helpers/getAddToCartUrl";
import Button from "../../components/Button/Button";
import { vectors } from "../../mockData/products";
import { getSlug } from "../../helpers/getSlug";
import { useParams } from "react-router-dom";
import NetflixScroll from "../../components/NetflixScroll/NetflixScroll";

const fieldNames = {
  completeWallet: "completeWallet",
  baseOnly: "baseOnly",
  lidOnly: "lidOnly"
};

const fieldId = {
  completeSmall: "Small - 10 Cards",
  completeMedium: "Medium - 14 Cards",
  completeLarge: "Large - 18 Cards"
};

// eslint-disable-next-line no-magic-numbers
const bases = [10, 14, 18];

const handleFeaturesClick = () => {
  return (window.location.href = "/scudo-vector-wallets");
};

const handleAddToCart = async (event, title, type) => {
  event.preventDefault();
  const formData = new FormData(document.getElementById("add-to-cart"));

  let response;

  // eslint-disable-next-line no-unused-vars
  for (const [product, value] of formData.entries()) {
    if (product === fieldNames.completeWallet) {
      const addToCartUrl = getAddToCartUrl(product, type.toLowerCase());

      try {
        response = await fetch(addToCartUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ Logo: title, Base: value })
        });
      } catch (error) {
        console.error(error);
      }
    }

    if (product === fieldNames.lidOnly) {
      const addToCartUrl = getAddToCartUrl(product, type.toLowerCase());

      try {
        response = await fetch(addToCartUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ Logo: title })
        });
      } catch (error) {
        console.error(error);
      }
    }

    if (product.includes("base")) {
      const addToCartUrl = getAddToCartUrl(productType.baseOnly);

      let size;

      switch (product) {
        case `base-10`:
          size = fieldId.completeSmall;
          break;
        case `base-14`:
          size = fieldId.completeMedium;
          break;
        case `base-18`:
          size = fieldId.completeLarge;
          break;
        default:
          size = fieldId.completeSmall;
      }

      try {
        response = await fetch(addToCartUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ Size: size })
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  if (response && response.ok) {
    const { cartId } = await response.json();

    window.location.href = `/carts/${cartId}`;
  }
};

const ProductDetails = () => {
  const { productSlug } = useParams();
  const [product] = vectors.filter(
    product => getSlug(product.title) === productSlug
  );
  const { title, type, description, wideImage = false } = product;

  useEffect(() => {
    document.getElementById(fieldId.completeSmall).checked = false;
    document.getElementById(fieldId.completeMedium).checked = false;
    document.getElementById(fieldId.completeLarge).checked = false;
  }, [product]);

  const imgSrc = getImageFilePath(title);

  return (
    <React.Fragment>
      <StyledContainer wideImage={wideImage}>
        <div className={"img-container"}>
          <img src={imgSrc} alt={`${title}`} />
        </div>
        <div className={"product-details"}>
          <StyledHeader2>{title}</StyledHeader2>
          <div className={"wrap-type"}>{type} Wrap</div>
          {description && description.length && <p>{description}</p>}
          <form id={"add-to-cart"}>
            <StyledProductSelect>
              <input
                id={fieldId.completeSmall}
                type={"radio"}
                name={fieldNames.completeWallet}
                value={fieldId.completeSmall}
              />
              <label htmlFor={fieldId.completeSmall}>
                <span>Lid &amp; Base (10 Cards)</span>
                <span>
                  <sup>$</sup>
                  {getPricing(getPricingOptions.completeWallet, type)}
                </span>
              </label>
            </StyledProductSelect>

            <StyledProductSelect>
              <input
                id={fieldId.completeMedium}
                type={"radio"}
                name={fieldNames.completeWallet}
                value={fieldId.completeMedium}
              />
              <label htmlFor={fieldId.completeMedium}>
                <span>Lid &amp; Base (14 Cards)</span>
                <span>
                  <sup>$</sup>
                  {getPricing(getPricingOptions.completeWallet, type)}
                </span>
              </label>
            </StyledProductSelect>

            <StyledProductSelect>
              <input
                id={fieldId.completeLarge}
                type={"radio"}
                name={fieldNames.completeWallet}
                value={fieldId.completeLarge}
              />
              <label htmlFor={fieldId.completeLarge}>
                <span>Lid &amp; Base (18 Cards)</span>
                <span>
                  <sup>$</sup>
                  {getPricing(getPricingOptions.completeWallet, type)}
                </span>
              </label>
            </StyledProductSelect>

            <StyledDivider />

            <StyledProductSelect>
              <input
                id={fieldNames.lidOnly}
                type={"checkbox"}
                name={fieldNames.lidOnly}
              />
              <label htmlFor={fieldNames.lidOnly}>
                <span>Lid Only</span>
                <span>
                  <sup>$</sup>
                  {getPricing(getPricingOptions.lidOnly, type)}
                </span>
              </label>
            </StyledProductSelect>

            <StyledDivider />

            {bases.map(base => (
              <StyledProductSelect key={`base-${base}`}>
                <input
                  id={`base-${base}`}
                  type={"checkbox"}
                  name={`base-${base}`}
                />
                <label htmlFor={`base-${base}`}>
                  <span>{base} Card Base Only</span>
                  <span>
                    <sup>$</sup>44
                  </span>
                </label>
              </StyledProductSelect>
            ))}

            <Button
              text={"Add To Cart"}
              onClick={event => handleAddToCart(event, title, type)}
            />
            <Button
              text={"View All Features"}
              handleOnClick={handleFeaturesClick}
              isTransparent={true}
            />
          </form>
        </div>
      </StyledContainer>
      <NetflixScroll />
    </React.Fragment>
  );
};

export default ProductDetails;
