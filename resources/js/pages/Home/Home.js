import React, { useState, useEffect } from "react";
import { app } from "../../constants/app";
import { StyledCalloutSection, StyledHomeContainer } from "./Home.styled";
import Button from "../../components/Button/Button";
import NetflixScroll from "../../components/NetflixScroll/NetflixScroll";
import { routes } from "../../constants/routes";
import { Redirect } from "react-router-dom";
import { scrollToTop } from "../../helpers/scrollToTop";
import { colors } from "../../constants/colors";
import TopFeatures from "../../components/TopFeatures/TopFeatures";

const Home = () => {
  const [redirectShopWallets, setRedirectShopWallets] = useState(false);

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
          pathname: `${routes.products.path}`
        }}
      />
    );
  }

  return (
    <StyledHomeContainer>
      <div id="cover-container">
        <img
          src="img/logo-transparent.png"
          alt={`${app.scudo} Logo`}
          id="cover-logo"
        />
        <div id="intro-text-container">
          <span className="xl-text">{app.name}</span>
          <span className="lg-text">Your best wallet yet.</span>
          <Button text={app.shopAllWallets} handleOnClick={onButtonClick} />
        </div>
        <img
          id="cover-focus"
          src="img/landing/skull-cutout-large.png"
          alt={app.name}
        />
      </div>
      <TopFeatures />
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
          <Button text={app.shopAllWallets} handleOnClick={onButtonClick} />
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
          <Button
            text={app.shopAllWallets}
            handleOnClick={onButtonClick}
            background={colors.white}
          />
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
          <Button text={app.shopAllWallets} handleOnClick={onButtonClick} />
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
          <Button
            text={app.shopAllWallets}
            handleOnClick={onButtonClick}
            background={colors.white}
          />
        </div>
      </div>
    </StyledHomeContainer>
  );
};

export default Home;
