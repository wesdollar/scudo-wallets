import { productId } from "../constants/productIds";
import { app } from "../constants/app";

export const getProductId = (product, type = "") => {
  if (!type.length) {
    return productId[product];
  }

  return productId[product][type];
};

export const getAddToCartUrl = (product, type = "") => {
  const productId = getProductId(product, type);

  return `${app.apiUrl}/cart/add/${productId}`;
};
