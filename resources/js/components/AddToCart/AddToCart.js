import React from "react";
import PropTypes from "prop-types";
import { StyledDivider, StyledProductSelect } from "./AddToCart.styled";
import { getPricing, getPricingOptions } from "../../helpers/getPricing";
import Button from "../Button/Button";
import { gutters } from "../../constants/gutters";
import { fieldId } from "../../constants/fieldIds";
import { fieldNames } from "../../constants/addToCart";
import { getAddToCartUrl } from "../../helpers/getAddToCartUrl";
import { localStorageKeys } from "../../constants/localStorageKeys";
import { productType } from "../../constants/productTypes";
import { failedFetch } from "../../helpers/failedFetch";

// eslint-disable-next-line no-magic-numbers
const bases = [10, 14, 18];

const handleResponse = async response => {
  if (response && response.ok) {
    try {
      const { CID, cartId } = await response.json();

      localStorage.setItem(localStorageKeys.cid, CID);
      localStorage.setItem(localStorageKeys.cartId, cartId);
    } catch (error) {
      // console.error(error);
    }
  }
};

const handleAddToCart = async (event, title, type) => {
  event.preventDefault();
  const formData = new FormData(document.getElementById("add-to-cart"));

  let response;
  let data;

  // eslint-disable-next-line no-unused-vars
  for (const [product, value] of formData.entries()) {
    if (product === fieldNames.completeWallet) {
      const addToCartUrl = getAddToCartUrl(product, type.toLowerCase());

      data = { Logo: title, Base: value };

      if (localStorage.getItem(localStorageKeys.cid)) {
        data.CID = localStorage.getItem(localStorageKeys.cid);
      }

      try {
        response = await fetch(addToCartUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        await handleResponse(response);
      } catch (error) {
        return failedFetch();
      }
    }

    if (product === fieldNames.lidOnly) {
      const addToCartUrl = getAddToCartUrl(product, type.toLowerCase());

      data = { Logo: title };

      if (localStorage.getItem(localStorageKeys.cid)) {
        data.CID = localStorage.getItem(localStorageKeys.cid);
      }

      try {
        response = await fetch(addToCartUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        await handleResponse(response);
      } catch (error) {
        return failedFetch();
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

      data = { Size: size };

      if (localStorage.getItem(localStorageKeys.cid)) {
        data.CID = localStorage.getItem(localStorageKeys.cid);
      }

      try {
        response = await fetch(addToCartUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        await handleResponse(response);
      } catch (error) {
        return failedFetch();
      }
    }
  }

  return (window.location = "/cart");
};

const AddToCart = ({ productTitle, productType, setHandleFeatureClick }) => {
  return (
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
            {getPricing(getPricingOptions.completeWallet, productType)}
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
            {getPricing(getPricingOptions.completeWallet, productType)}
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
            {getPricing(getPricingOptions.completeWallet, productType)}
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
            {getPricing(getPricingOptions.lidOnly, productType)}
          </span>
        </label>
      </StyledProductSelect>

      <StyledDivider />

      {bases.map(base => (
        <StyledProductSelect key={`base-${base}`}>
          <input id={`base-${base}`} type={"checkbox"} name={`base-${base}`} />
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
        handleOnClick={event =>
          handleAddToCart(event, productTitle, productType)
        }
        gutterTop={gutters.doubleGutter}
      />
      <Button
        text={"View All Features"}
        handleOnClick={() => setHandleFeatureClick(true)}
        isTransparent={true}
        gutterTop={gutters.doubleGutter}
      />
    </form>
  );
};

AddToCart.propTypes = {
  setHandleFeatureClick: PropTypes.func.isRequired,
  productType: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired
};

export default AddToCart;
