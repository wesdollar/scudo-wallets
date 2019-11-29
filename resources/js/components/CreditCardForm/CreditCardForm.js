import React from "react";
import Content from "../Content/Content";
import { formRowProps } from "../AddressForm/AddressForm";

const fieldId = {
  name: "ccName",
  number: "ccNumber",
  expirationMonth: "ccExpirationMonth",
  expirationYear: "ccExpirationYear",
  cvv: "ccCVV"
};

const fillFormFieldsWithDummyData = () => {
  if (process.env.MIX_ENV !== "dev") {
    return false;
  }

  const data = {
    name: "Mike Gordon",
    number: "1234432112344321",
    expirationMonth: "05",
    expirationYear: "2029",
    cvv: "555"
  };

  Object.keys(fieldId).map(key => {
    const field = document.getElementById(`${fieldId[key]}`) || false;

    if (field) {
      field.value = `${data[key]}`;
    }
  });
};

const CreditCardForm = () => {
  return (
    <React.Fragment>
      <Content {...formRowProps}>
        <div>
          <label htmlFor={fieldId.name}>Name on Card</label>
          <input
            className="form-control"
            name={fieldId.name}
            type="text"
            id={fieldId.name}
          />
        </div>
        <div>
          <label
            htmlFor={fieldId.number}
            onDoubleClick={fillFormFieldsWithDummyData}
          >
            Card Number
          </label>
          <input
            className="form-control"
            name={fieldId.number}
            type="text"
            id={fieldId.number}
          />
        </div>
      </Content>
      <Content {...formRowProps}>
        <div>
          <label htmlFor={fieldId.expirationMonth}>Expiration Month</label>
          <select
            className="form-control"
            id={fieldId.expirationMonth}
            name={fieldId.expirationMonth}
          >
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div>
          <label htmlFor={fieldId.expirationYear}>Expiration Year</label>
          <select
            className="form-control"
            id={fieldId.expirationYear}
            name={fieldId.expirationYear}
          >
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
          </select>
        </div>
      </Content>
      <Content {...formRowProps}>
        <div>
          <label htmlFor={fieldId.cvv}>CVV Security Code</label>
          <input
            className="form-control"
            name={fieldId.cvv}
            type="text"
            id={fieldId.cvv}
          />
        </div>
        <div>&nbsp;</div>
      </Content>
    </React.Fragment>
  );
};

export default CreditCardForm;
