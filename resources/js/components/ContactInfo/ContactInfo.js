import React from "react";
import { app } from "../../constants/app";

const ContactUs = () => (
  <p>
    <strong>MGW Scudo</strong>
    <br />
    4159 Mike Padgett Highway
    <br />
    Augusta, GA 30906
    <br />
    {app.email}
  </p>
);

export default ContactUs;
