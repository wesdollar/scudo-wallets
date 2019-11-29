import React from "react";
import Content from "../../components/Content/Content";
import { app } from "../../constants/app";

const Contact = () => {
  return (
    <React.Fragment>
      <Content>
        <h1>The quest for a better wallet ends here.</h1>
        <p>
          We&apos;re happy to help in any way that we can! Use the form below to
          send us an email or pick up your phone and give us a call!
        </p>
        <p>
          If you have a question about our products, an order you have placed,
          need help choosing which {app.scudo} is right for you, need to return
          an item, or anything else for that matter, simply send us an email
          directly to our inbox. We do our best to respond to all emails within
          3-4 hours during normal business hours. If you need immediate
          assistance, please feel free to give us a call at {app.phone}!
        </p>
      </Content>
    </React.Fragment>
  );
};

export default Contact;
