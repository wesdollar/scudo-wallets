import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import { StyledPageWrapper } from "./App.styled";
import { routes } from "../constants/routes";
import Features from "../pages/Features/Features";
import Faqs from "../pages/Faqs/Faqs";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Footer from "./Footer/Footer";
import Cart from "../pages/Cart/Cart";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import ReturnPolicy from "../pages/ReturnPolicy/ReturnPolicy";
import TermsOfService from "../pages/TermsOfService/TermsOfService";
import PageNoteFound from "../pages/PageNotFound/PageNotFound";

const App = () => (
  <React.Fragment>
    <Header />
    <StyledPageWrapper>
      <Route exact path={routes.home.path} component={Home} />
      <Route exact path={routes.products.path} component={Products} />
      <Route
        exact
        path="/scudo-vector-wallets/:productSlug"
        component={ProductDetails}
      />
      <Route exact path={routes.features.path} component={Features} />
      <Route exact path={routes.faqs.path} component={Faqs} />
      <Route exact path={routes.about.path} component={About} />
      <Route exact path={routes.contact.path} component={Contact} />
      <Route exact path={routes.cart.path} component={Cart} />
      <Route exact path={routes.privacyPolicy.path} component={PrivacyPolicy} />
      <Route exact path={routes.returnPolicy.path} component={ReturnPolicy} />
      <Route
        exact
        path={routes.termsOfService.path}
        component={TermsOfService}
      />
      <Route path="*">
        <PageNoteFound />
      </Route>
    </StyledPageWrapper>
    <Footer />
  </React.Fragment>
);

export default App;
