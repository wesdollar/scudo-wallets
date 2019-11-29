import React, { useEffect, useState } from "react";
import featuresImage from "../../../img/hp-features-cutout.png";
import { app } from "../../constants/app";
import Button from "../Button/Button";
import { StyledFullHeightSection } from "./TopFeatures.styled";
import { scrollToTop } from "../../helpers/scrollToTop";
import { routes } from "../../constants/routes";
import { Redirect, useLocation } from "react-router-dom";

const featuresBlock1 = [
  {
    header: "Swappable Lids & Bases",
    text:
      "Collect all the logos and swap out your wallet's capacity to fit the needs of day."
  },
  {
    header: "Locks Tight, Easy to Open",
    text:
      "Unique spring loaded latch mechanism keeps contents where they belong, and still allows for quick, one-handed opening."
  }
];

const featuresBlock2 = [
  {
    header: "Lightweight, Less Than 4oz",
    text:
      "Fits in any pocket, and, at under 4oz, you'll hardly know it's there."
  },
  {
    header: "Customizable Capacity",
    text:
      "Select from 10, 14, or 18 card capacity, or collect them all to swap out on demand."
  }
];

const featuresBlock3 = [
  {
    header: "Built to Last",
    text: "CNC Machined from 6061 aluminum and anodized to last."
  },
  {
    header: "Made for You",
    text: "A wallet as unique as you, perfect down to the smallest of details."
  }
];

const TopFeatures = () => {
  const [redirectShopWallets, setRedirectShopWallets] = useState(false);
  const [redirectTo, setRedirectTo] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    return () => {
      setRedirectShopWallets(false);
    };
  }, [redirectShopWallets]);

  const onButtonClick = redirectToPath => {
    setRedirectTo(redirectToPath);
    scrollToTop();
    setRedirectShopWallets(true);
  };

  if (redirectShopWallets) {
    return (
      <Redirect
        push
        to={{
          pathname: `${redirectTo}`
        }}
      />
    );
  }

  return (
    <StyledFullHeightSection>
      <div className={"top-features hp-features-row"}>
        {featuresBlock1.map((feature, index) => (
          <div className={"hp-feature"} key={`feature-${index}`}>
            <h4>{feature.header}</h4>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
      <div className={"hp-features-column left"}>
        {featuresBlock2.map((feature, index) => (
          <div className={"hp-feature"} key={`feature-${index}`}>
            <h4>{feature.header}</h4>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
      <div className={"hp-features-img"}>
        <img src={featuresImage} alt={`${app.name} Features`} />
      </div>
      <div className={"hp-features-column right"}>
        {featuresBlock3.map((feature, index) => (
          <div className={"hp-feature"} key={`feature-${index}`}>
            <h4>{feature.header}</h4>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
      <div className={"bottom-features hp-features-row"}>
        <Button
          text={app.shopAllWallets}
          handleOnClick={() => onButtonClick(routes.products.path)}
        />
        {pathname !== routes.features.path && (
          <Button
            text={"View All Features"}
            handleOnClick={() => onButtonClick(routes.features.path)}
          />
        )}
      </div>
    </StyledFullHeightSection>
  );
};

export default TopFeatures;
