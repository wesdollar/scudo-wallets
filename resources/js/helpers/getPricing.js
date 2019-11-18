import { wraps } from "../constants/wraps";
import { price } from "../constants/prices";

export const getPricingOptions = {
  completeWallet: "completeWallet",
  lidOnly: "lidOnly"
};

/*
 * @param  product   string:completeWallet, string:lidOnly
 * @param  type    wraps.standard, wraps.full, wraps.classic
 */
export const getPricing = (product, type) => {
  let pricing;

  switch (type) {
    case wraps.standard:
      pricing = price[product].standard;
      break;
    case wraps.full:
      pricing = price[product].full;
      break;
    case wraps.classic:
      pricing = price[product].classic;
      break;
    default:
      pricing = price[product].full;
  }

  return pricing;
};
