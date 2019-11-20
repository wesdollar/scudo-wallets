import React, { useState, useEffect } from "react";
import { app } from "../../constants/app";
import { StyledCalloutSection, StyledFullHeightSection } from "./Home.styled";
import featuresImage from "../../../img/hp-features-cutout.png";
import Button from "../../components/Button/Button";
import NetflixScroll from "../../components/NetflixScroll/NetflixScroll";
import { route } from "../../constants/routes";
import { getSlug } from "../../helpers/getSlug";
import { Redirect } from "react-router-dom";
import { scrollToTop } from "../../helpers/scrollToTop";

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

const Home = () => {
  const [redirectShopWallets, setRedirectShopWallets] = useState(false);
  const launchMessage = "Coming Black Friday 2019";
  const shopAllWallets = "Shop All Wallets";

  useEffect(() => {
    return () => {
      setRedirectShopWallets(false);
    };
  }, [redirectShopWallets]);

  const onButtonClick = () => {
    scrollToTop();
    setRedirectShopWallets(true);
  };

  if (redirectShopWallets) {
    return (
      <Redirect
        push
        to={{
          pathname: `${route.products}`
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <div id="cover-container">
        <img
          src="img/logo-transparent.png"
          alt={`${app.scudo} Logo`}
          id="cover-logo"
        />
        <div id="intro-text-container">
          <span className="xl-text">{app.name}</span>
          <span className="lg-text">Your best wallet yet.</span>
          <span id="coming-message">// {launchMessage}</span>
          <Button text={shopAllWallets} handleOnClick={onButtonClick} />
        </div>
        <img
          id="cover-focus"
          src="img/landing/skull-cutout-large.png"
          alt={app.name}
        />
      </div>
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
          <Button text={shopAllWallets} handleOnClick={onButtonClick} />
          <Button text={"View All Features"} />
        </div>
      </StyledFullHeightSection>
      <StyledCalloutSection>
        <NetflixScroll />
      </StyledCalloutSection>
      <div className="split-image-section">
        <div className="split-image" id="split-one">
          &nbsp;
        </div>
        <div className="split-content">
          <h1>The Perfect Wallet</h1>
          <p>
            Lightweight, holds everything you need, durable, and truly unique.
            You won&apos;t find a better wallet.
          </p>
          <div className="bordered-callout">{launchMessage}</div>
        </div>
      </div>
      <div className="split-image-section reverse background-primary">
        <div className="split-image" id="split-four">
          &nbsp;
        </div>
        <div className="split-content">
          <h1>Unique in Every Way</h1>
          <p>
            This wallet is designed for those that want something more.
            Don&apos;t settle for the status quo. Get the wallet that&apos;s
            made for you.
          </p>
          <div className="bordered-callout">{launchMessage}</div>
        </div>
      </div>
      <div className="split-image-section">
        <div className="split-image" id="split-three">
          &nbsp;
        </div>
        <div className="split-content">
          <h1>Hold Your Life</h1>
          <p>
            Designed to hold exactly what your life needs. Fits in your pocket,
            handles nicely in your hand. Packs cards, cash, and those personal
            touches in an easy-to-open, convenient to find, yet completely
            secure package.
          </p>
          <div className="bordered-callout">{launchMessage}</div>
        </div>
      </div>
      <div className="split-image-section reverse background-primary">
        <div className="split-image" id="split-two">
          &nbsp;
        </div>
        <div className="split-content">
          <h1>Details Matter</h1>
          <p>
            From the laser etching to the overall design, we&apos;ve ensured
            every detail is perfect. This is the wallet you&apos;ve been waiting
            for. This is your wallet. Designed by {app.scudo}, made for you.
          </p>
          <div className="bordered-callout">{launchMessage}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
