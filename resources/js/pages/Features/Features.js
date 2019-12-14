import React, { useState, useEffect } from "react";
import { StyledCalloutSection } from "../Home/Home.styled";
import NetflixScroll from "../../components/NetflixScroll/NetflixScroll";
import TopFeatures from "../../components/TopFeatures/TopFeatures";
import Content from "../../components/Content/Content";
import Youtube from "../../components/Youtube/Youtube";
import { StyledSplitContent } from "./Features.styled";
import basesImage from "../../../img/bases-info.jpg";
import { app } from "../../constants/app";
import Button from "../../components/Button/Button";
import { Redirect } from "react-router-dom";
import { routes } from "../../constants/routes";
import { scrollToTop } from "../../helpers/scrollToTop";
import LazyLoad from "react-lazyload";

const Features = () => {
  const [goToShop, setGoToShop] = useState(false);

  useEffect(() => {
    return () => {
      return setGoToShop(false);
    };
  }, [goToShop]);

  if (goToShop) {
    scrollToTop();

    return (
      <Redirect
        push
        to={{
          pathname: `${routes.products.path}`
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <Content alternateBackground={true}>
        <StyledSplitContent>
          <div>
            <p>
              Designed to hold exactly what your life needs. Fits in your
              pocket, handles nicely in your hand. Packs cards, cash, and those
              personal touches in an easy-to-open, convenient to find, yet
              completely secure package.
            </p>
          </div>
          <div>
            <Youtube videoId={"l4Z5WH7y6Lg"} />
          </div>
        </StyledSplitContent>
        <StyledSplitContent>
          <div>
            <Youtube videoId={"HfBPpcCexhc"} />
          </div>
          <div>
            <p>
              Interchangable bases and lids mean you can carry what suits your
              mood. Bases are available in three sizes - 10, 14, or 18
              card-carrying capacity. As for the lids, you&apos;ll just have to
              collect them all.
            </p>
          </div>
        </StyledSplitContent>
      </Content>
      <TopFeatures />
      <Content textAlign={"center"}>
        <LazyLoad offset={200}>
          <div>
            <img
              src={basesImage}
              alt={`${app.scudo} Bases - Available in three sizes`}
            />
          </div>
        </LazyLoad>
        <Button
          text={app.shopAllWallets}
          handleOnClick={() => setGoToShop(true)}
        />
      </Content>
      <StyledCalloutSection>
        <NetflixScroll />
      </StyledCalloutSection>
    </React.Fragment>
  );
};

export default Features;
