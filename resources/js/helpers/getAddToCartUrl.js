import { productId } from "../constants/productIds";

export const getProductId = (product, type = "") => {
  if (!type.length) {
    return productId[product];
  }

  return productId[product][type];
};

export const getAddToCartUrl = (product, type = "") => {
  const productId = getProductId(product, type);

  return `/cart/add/${productId}`;
};
