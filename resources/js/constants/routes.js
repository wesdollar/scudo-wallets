import { app } from "./app";

const titleSuffix = `| ${app.name}`;

export const routes = {
  home: {
    path: "/",
    title: `Home`,
    metaTitle: `${app.name} | The Wallet Made for You`,
    description: `${app.name} - built slim, light, and made to hold everything important. A unique design perfected to fit into your life. The wallet you've been waiting for.`
  },
  products: {
    path: "/scudo-vector-wallets",
    title: "Shop Wallets",
    metaTitle: `Shop All ${app.name}`,
    description: `Shop all ${app.name} and see what makes our wallet the best you'll ever fit in your pocket. Engineered to hold everything important in your life, in a light, slim profile unique as you.`
  },
  features: {
    path: "/scudo-wallet-features",
    title: "Wallet Features",
    metaTitle: `${app.scudo} Wallet Features`,
    description: `${app.name} features a design unlike any other, offers customized capacity for the fit you need, locks tight yet easy to open, and is built to last. A wallet built for you as unique as you.`
  },
  faqs: {
    path: "/scudo-wallet-faqs",
    title: "FAQs",
    metaTitle: `FAQs ${titleSuffix}`,
    description: `Answers to commonly asked questions are a click away. Our FAQs are a great way to learn more about ${app.name} as see how we've tried to think of everything to design the perfect wallet for you.`
  },
  about: {
    path: "/about-scudo-wallets",
    title: "About",
    metaTitle: `About ${app.scudo} by MGW`,
    hideFromNav: true,
    description: `${app.scudo} are manufactured by one of the most trusted names in precision CNC manufacturing, MGW LTD., who's customer service and commitment to quality is unrivaled.`
  },
  contact: {
    path: "/contact-scudo-wallets",
    title: "Contact",
    metaTitle: `Contact Us ${titleSuffix}`,
    description: `We are are always happy to answer any questions you may have. We operate like a small mom-and-pop shop, so you'll always get a friendly, helpful voice on the other end without waiting hours.`
  },
  cart: {
    path: "/cart",
    title: `Shopping Cart`,
    metaTitle: `Shopping Cart ${titleSuffix}`,
    requiresCart: true,
    description:
      "View your shopping cart, add more wallets, make changes to your order, but - most importantly - get the wallet that's made for you!"
  },
  privacyPolicy: {
    path: "/scudo-privacy-policy",
    title: "Privacy Policy",
    metaTitle: `Privacy Policy ${titleSuffix}`,
    hideFromNav: true,
    description:
      "Our privacy policy covers everything you need to know about how we protect your data when you shop with us."
  },
  returnPolicy: {
    path: "/scudo-return-policy",
    title: "Return Policy",
    metaTitle: `Return Policy ${titleSuffix}`,
    hideFromNav: true,
    description:
      "We back all of our products, and we're transparent about our return policy. View all the details to see how we treat our customers as our number one priority."
  },
  termsOfService: {
    path: "/scudo-terms-of-service",
    title: "Terms of Service",
    metaTitle: `Terms of Service ${titleSuffix}`,
    hideFromNav: true,
    description:
      "Really, the lawyers just make us put this here. Our TOS goes into further detail about how we protect you and honor the trust you place in us when doing business with us."
  }
};
