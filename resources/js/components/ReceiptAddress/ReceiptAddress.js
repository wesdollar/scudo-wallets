import React from "react";
import PropTypes from "prop-types";
import { fieldId } from "../AddressForm/AddressForm";

const ReceiptAddress = ({ orderData, prefix, header }) => {
  return (
    <React.Fragment>
      <h4>{header}</h4>
      <p>
        {`${orderData[`${prefix}${fieldId.first}`]} ${
          orderData[`${prefix}${fieldId.last}`]
        }`}{" "}
        <br />
        {`${orderData[`${prefix}${fieldId.address}`]}`} <br />
        {orderData[`${prefix}${fieldId.address2}`] && (
          <React.Fragment>
            {orderData[`${prefix}${fieldId.address2}`]} <br />
          </React.Fragment>
        )}
        {`${orderData[`${prefix}${fieldId.city}`]}, ${
          orderData[`${prefix}${fieldId.state}`]
        } ${orderData[`${prefix}${fieldId.zip}`]}`}
      </p>
    </React.Fragment>
  );
};

ReceiptAddress.propTypes = {
  header: PropTypes.string.isRequired,
  orderData: PropTypes.object.isRequired,
  prefix: PropTypes.string.isRequired
};

ReceiptAddress.defaultProps = {
  header: "",
  orderData: {},
  prefix: ""
};

export default ReceiptAddress;
