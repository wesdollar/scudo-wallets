import React, { useEffect, useState } from "react";
import featuresImage from "../../../img/hp-features-cutout.png";
import { app } from "../../constants/app";
import Button from "../Button/Button";
import { StyledFullHeightSection } from "../../pages/Home/Home.styled";
import { scrollToTop } from "../../helpers/scrollToTop";
import { routes } from "../../constants/routes";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ipsum = "Ultricies Condimentum Elit Tristique Consectetur";
const features = [
  {
    header: "Swappable Endcaps",
    text: ipsum
  },
  {
    header: "Smooth Action",
    text: ipsum
  }
  // {
  //   header: "Awesome Pin",
  //   text: ipsum
  // },
  // {
  //   header: "Beveled Stainless Thing",
  //   text: ipsum
  // },
  // {
  //   header: "Coated Finish",
  //   text: ipsum
  // },
  // {
  //   header: "Grippy Basepad",
  //   text: ipsum
  // }
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
        {features.map((feature, index) => (
          <div className={"hp-feature"} key={`feature-${index}`}>
            <h4>{feature.header}</h4>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
      <div className={"hp-features-column"}>
        {features.map((feature, index) => (
          <div className={"hp-feature"} key={`feature-${index}`}>
            <h4>{feature.header}</h4>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
      <div className={"hp-features-img"}>
        <img src={featuresImage} alt={`${app.name} Features`} />
      </div>
      <div className={"hp-features-column"}>
        {features.map((feature, index) => (
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
