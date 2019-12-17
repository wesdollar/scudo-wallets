import React, { useState } from "react";
import Content from "../Content/Content";
import { gutters } from "../../constants/gutters";
import PropTypes from "prop-types";
import { capitalize } from "lodash";

export const formRowProps = {
  half: true,
  gutterBottom: gutters.gutter
};

export const formPrefixes = {
  shipping: "shipping",
  billing: "billing"
};

export const fieldId = {
  first: "First",
  last: "Last",
  company: "Company",
  phone: "Phone",
  email: "Email",
  country: "Country",
  address: "Address",
  address2: "Address2",
  city: "City",
  state: "State",
  zip: "Zip",
  internationalShippingAddress: "intlShippingAddress"
};

export const internationalFieldValue = "INTL";
export const domesticFieldValue = "US";

const fillFormFieldsWithDummyData = prefix => {
  if (process.env.MIX_ENV !== "dev") {
    return false;
  }

  const data = {
    first: "Trey",
    last: "Anastasio",
    company: "Phish Inc",
    phone: "555-555-9999",
    email: "trey@phish.com",
    country: "US",
    address: "123 Phish Ave",
    address2: "MSG NY",
    city: "NY",
    state: "NY",
    zip: "12345"
  };

  Object.keys(fieldId).map(key => {
    const field = document.getElementById(`${prefix}${fieldId[key]}`) || false;

    if (field) {
      field.value = `${data[key]}`;
    }
  });
};

const AddressForm = ({
  prefix,
  handleIsInternationalBilling,
  handleIsInternationalShipping
}) => {
  const [isInternationalShipping, setIsInternationalShipping] = useState(false);
  const [isInternationalBilling, setIsInternationalBilling] = useState(false);

  const setState = {
    setIsInternationalShipping: boolean => setIsInternationalShipping(boolean),
    setIsInternationalBilling: boolean => setIsInternationalBilling(boolean),
    handleIsInternationalShipping: boolean =>
      handleIsInternationalShipping(boolean),
    handleIsInternationalBilling: boolean =>
      handleIsInternationalBilling(boolean)
  };

  const handleInternationalShipping = () => {
    const element = document.getElementById(`${prefix}${fieldId.country}`);
    const optionValue = element.options[element.selectedIndex].value;
    const functionName = `setIsInternational${capitalize(prefix)}`;
    const handlerFunctionName = `handleIsInternational${capitalize(prefix)}`;

    if (optionValue === internationalFieldValue) {
      setState[handlerFunctionName](true);

      return setState[functionName](true);
    }

    if (optionValue === domesticFieldValue) {
      setState[handlerFunctionName](false);

      return setState[functionName](false);
    }
  };

  const displayAddressForm =
    (prefix === formPrefixes.shipping && !isInternationalShipping) ||
    (prefix === formPrefixes.billing && !isInternationalBilling);

  return (
    <div id={`${prefix}-form`}>
      <Content {...formRowProps}>
        <div>
          <label htmlFor={`${prefix}${fieldId.first}`}>First Name</label>
          <input
            className="form-control"
            name={`${prefix}${fieldId.first}`}
            type="text"
            id={`${prefix}${fieldId.first}`}
          />
        </div>
        <div>
          <label
            htmlFor={`${prefix}${fieldId.last}`}
            onDoubleClick={() => fillFormFieldsWithDummyData(prefix)}
          >
            Last Name
          </label>
          <input
            className="form-control"
            name={`${prefix}${fieldId.last}`}
            type="text"
            id={`${prefix}${fieldId.last}`}
          />
        </div>
      </Content>
      {prefix === formPrefixes.shipping && (
        <Content {...formRowProps}>
          <div>
            <label htmlFor={`${prefix}${fieldId.company}`}>Company Name</label>
            <input
              className="form-control"
              name={`${prefix}${fieldId.company}`}
              type="text"
              id={`${prefix}${fieldId.company}`}
            />
          </div>
          <div>&nbsp;</div>
        </Content>
      )}
      <Content {...formRowProps}>
        <div>
          <label htmlFor={`${prefix}${fieldId.phone}`}>Phone Number</label>
          <input
            className="form-control"
            name={`${prefix}${fieldId.phone}`}
            type="text"
            id={`${prefix}${fieldId.phone}`}
          />
        </div>
        <div>
          <label htmlFor={`${prefix}${fieldId.email}`}>Email Address</label>
          <input
            className="form-control"
            name={`${prefix}${fieldId.email}`}
            type="email"
            id={`${prefix}${fieldId.email}`}
          />
        </div>
      </Content>
      <Content {...formRowProps}>
        <div>
          <div className="col-md-6 form-group">
            <label htmlFor={`${prefix}${fieldId.country}`}>Country</label>
            {/* eslint-disable-next-line jsx-a11y/no-onchange */}
            <select
              className="form-control"
              id={`${prefix}${fieldId.country}`}
              name={`${prefix}${fieldId.country}`}
              onChange={handleInternationalShipping}
            >
              <option value={domesticFieldValue}>USA</option>
              <option value={internationalFieldValue}>Other</option>
            </select>
          </div>
        </div>
        <div>&nbsp;</div>
      </Content>
      {displayAddressForm && (
        <React.Fragment>
          <Content {...formRowProps}>
            <div>
              <label htmlFor={`${prefix}${fieldId.address}`}>Address</label>
              <input
                className="form-control"
                name={`${prefix}${fieldId.address}`}
                type="text"
                id={`${prefix}${fieldId.address}`}
              />
            </div>
            <div>
              <label htmlFor={`${prefix}${fieldId.address2}`}>Address 2</label>
              <input
                className="form-control"
                name={`${prefix}${fieldId.address2}`}
                type="text"
                id={`${prefix}${fieldId.address2}`}
              />
            </div>
          </Content>
          <Content {...formRowProps}>
            <div>
              <label htmlFor={`${prefix}${fieldId.city}`}>City</label>
              <input
                className="form-control"
                name={`${prefix}${fieldId.city}`}
                type="text"
                id={`${prefix}${fieldId.city}`}
              />
            </div>
            <div>
              <label htmlFor={`${prefix}${fieldId.state}`}>State</label>
              <select
                id={`${prefix}${fieldId.state}`}
                className="form-control"
                name={`${prefix}${fieldId.state}`}
              >
                <option value="" />
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
                <option value="AE">APO / FPO</option>
                <option value="GU">Guam</option>
                <option value="PR">Puerto Rico</option>
                <option value="VI">Virgin Isles</option>
              </select>
            </div>
          </Content>
          <Content {...formRowProps}>
            <div>
              <label htmlFor={`${prefix}${fieldId.zip}`}>Zip</label>
              <input
                className="form-control"
                name={`${prefix}${fieldId.zip}`}
                type="number"
                id={`${prefix}${fieldId.zip}`}
              />
            </div>
            <div>&nbsp;</div>
          </Content>
        </React.Fragment>
      )}
      {prefix === formPrefixes.shipping && !displayAddressForm && (
        <React.Fragment>
          <div>
            <label htmlFor={fieldId.internationalShippingAddress}>
              International Shipping Address
            </label>
            <p className={"muted-text"}>
              For foreign orders (Canada, Europe, etc.) we ship using the US
              Postal Service (insured). We will charge your card the shipping
              amount at the time we ship. Please call our office at (+1
              706.793.1770) for a shipping quote.
            </p>
            <p className={"muted-text"}>
              <strong>
                Please type your address below exactly as you&apos;d write it on
                a package, including your name, country, and all other shipping
                details.
              </strong>{" "}
              This will help us get your order through your country&apos;s
              postal service and in your hands as quickly as possible. Thanks!
            </p>
            <textarea
              className="form-control"
              name={fieldId.internationalShippingAddress}
              id={fieldId.internationalShippingAddress}
              rows={4}
              placeholder={"International Shipping Label"}
            />
          </div>
        </React.Fragment>
      )}
      {prefix === formPrefixes.billing && !displayAddressForm && (
        <React.Fragment>
          <Content {...formRowProps}>
            <div>
              <label htmlFor={`${prefix}${fieldId.address}`}>Address</label>
              <input
                className="form-control"
                name={`${prefix}${fieldId.address}`}
                type="text"
                id={`${prefix}${fieldId.address}`}
              />
            </div>
            <div>
              <label htmlFor={`${prefix}${fieldId.zip}`}>Postal Code</label>
              <input
                className="form-control"
                name={`${prefix}${fieldId.zip}`}
                type="number"
                id={`${prefix}${fieldId.zip}`}
              />
            </div>
          </Content>
          <p className={"muted-text"}>
            Only address and postal code are required for international orders.
          </p>
        </React.Fragment>
      )}
    </div>
  );
};

AddressForm.propTypes = {
  prefix: PropTypes.string.isRequired,
  handleIsInternationalBilling: PropTypes.func.isRequired,
  handleIsInternationalShipping: PropTypes.func.isRequired
};

AddressForm.defaultProps = {
  prefix: "",
  handleIsInternationalShipping: () => {},
  handleIsInternationalBilling: () => {}
};

export default AddressForm;
