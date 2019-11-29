import React from "react";
import Content from "../../components/Content/Content";
import { app } from "../../constants/app";
import ContactUs from "../../components/ContactInfo/ContactInfo";

const ReturnPolicy = () => (
  <Content>
    <h1>Return Policy</h1>
    <p>
      If you are not 100% satisfied with your purchase, you can return your
      order for a full or partial refund. Returns must be unused, in the state
      you received them, and in the original packaging. All returns must be
      returned to us within 30 days of the original date you received your
      order. A 15% restocking fee will be deducted from the refund.
    </p>
    <p>
      If you have any questions, please contact us via phone or email by using
      the form below.
    </p>
    <h4>All Returns Must:</h4>
    <ul>
      <li>Be returned within 30 days of original receipt</li>
      <li>
        Be in the condition you received them and in the original box and/or
        packaging
      </li>
      <li>Include an RMA number. Please contact us for an RMA number</li>
      <li>Be approved before mailing the return back to us</li>
      <li>
        Pay return shipping; we do not refund any shipping costs, including the
        original shipping fees (some exceptions apply)
      </li>
      <li>Be issued a refund proportional to the amount used</li>
      <li>A 15% restocking fee will be deducted from the refund</li>
    </ul>
    <p>Please email or call us to request a RMA.</p>
    <ContactUs />
  </Content>
);

export default ReturnPolicy;
