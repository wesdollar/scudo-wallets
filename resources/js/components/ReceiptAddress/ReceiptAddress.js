import React from "react";
import PropTypes from "prop-types";
import {
  domesticFieldValue,
  fieldId,
  formPrefixes,
  internationalFieldValue
} from "../AddressForm/AddressForm";

const ReceiptAddress = ({ orderData, prefix, header }) => {
  const country = orderData[`${prefix}${fieldId.country}`];

  return (
    <React.Fragment>
      <h4>{header}</h4>
      <p>
        {`${orderData[`${prefix}${fieldId.first}`]} ${
          orderData[`${prefix}${fieldId.last}`]
        }`}{" "}
        <br />
        {country === domesticFieldValue && (
          <React.Fragment>
            {`${orderData[`${prefix}${fieldId.address}`]}`} <br />
            {orderData[`${prefix}${fieldId.address2}`] && (
              <React.Fragment>
                {orderData[`${prefix}${fieldId.address2}`]} <br />
              </React.Fragment>
            )}
            {`${orderData[`${prefix}${fieldId.city}`]}, ${
              orderData[`${prefix}${fieldId.state}`]
            } ${orderData[`${prefix}${fieldId.zip}`]}`}
          </React.Fragment>
        )}
        {prefix === formPrefixes.shipping &&
          country === internationalFieldValue && (
            <div
              dangerouslySetInnerHTML={{
                __html: orderData[fieldId.internationalShippingAddress].replace(
                  /(?:\r\n|\r|\n)/g,
                  "<br />"
                )
              }}
            />
          )}
        {prefix === formPrefixes.billing &&
          country === internationalFieldValue && (
            <React.Fragment>
              {orderData[`${prefix}${fieldId.address}`]} <br />
              {orderData[`${prefix}${fieldId.zip}`]}
            </React.Fragment>
          )}
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
