import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import { StyledPageWrapper } from "./App.styled";
import { route } from "../constants/routes";

const App = () => (
  <React.Fragment>
    <Header />
    <StyledPageWrapper>
      <Route exact path="/react" component={Home} />
      <Route exact path={route.products} component={Products} />
      <Route
        exact
        path="/scudo-vector-wallets/:productSlug"
        component={ProductDetails}
      />
    </StyledPageWrapper>
  </React.Fragment>
);

export default App;
