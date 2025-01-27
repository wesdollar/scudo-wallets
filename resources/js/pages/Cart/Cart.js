import React, { useState, useEffect } from "react";
import Content from "../../components/Content/Content";
import {
  StyledAddressFormsContainer,
  StyledCartItemsContainer,
  StyledCartTotalContainer,
  StyledCreditCardContainer,
  StyledTermsAcceptContainer
} from "./Cart.styled";
import { getImageFilePath } from "../../helpers/getImageFilePath";
import { app } from "../../constants/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import {
  faCcMastercard,
  faCcVisa,
  faCcDiscover
} from "@fortawesome/free-brands-svg-icons";
import { fontSize } from "../../constants/fontSizes";
import Text from "../../components/Text/Text";
import { gutters } from "../../constants/gutters";
import AddressForm, {
  fieldId,
  formPrefixes,
  formRowProps
} from "../../components/AddressForm/AddressForm";
import Button from "../../components/Button/Button";
import CreditCardForm from "../../components/CreditCardForm/CreditCardForm";
import { localStorageKeys } from "../../constants/localStorageKeys";
import ReceiptAddress from "../../components/ReceiptAddress/ReceiptAddress";
import NetflixScroll from "../../components/NetflixScroll/NetflixScroll";
import TopFeatures from "../../components/TopFeatures/TopFeatures";
import { scrollToTop } from "../../helpers/scrollToTop";
import Loading from "../../components/Loading/Loading";
import Helmet from "react-helmet";
import { routes } from "../../constants/routes";

const zero = 0;
const twoDecimals = 2;
const allowCartItemEditQuantity = false;
const allowCartItemDelete = true;
const checkoutFormId = "checkout-form";
const checkoutUrl = `${app.apiUrl}/checkout/process/`;
const deleteItemUrl = `${app.apiUrl}/carts/product/delete/`;
const cartUrl = `${app.apiUrl}/carts/`;

const getRequiredFields = () => ({
  [`billing${fieldId.first}`]: { display: "Billing First Name" },
  [`billing${fieldId.last}`]: { display: "Billing Last Name" },
  [`billing${fieldId.phone}`]: { display: "Billing Phone Number" },
  [`billing${fieldId.email}`]: { display: "Billing Email Address" },
  [`billing${fieldId.address}`]: { display: "Billing Mailing Address" },
  [`billing${fieldId.city}`]: { display: "Billing City" },
  [`billing${fieldId.state}`]: { display: "Billing State" },
  [`billing${fieldId.zip}`]: { display: "Billing Zip Code" },
  [`shipping${fieldId.first}`]: { display: "Shipping First Name" },
  [`shipping${fieldId.last}`]: { display: "Shipping Last Name" },
  [`shipping${fieldId.phone}`]: { display: "Shipping Phone Number" },
  [`shipping${fieldId.email}`]: { display: "Shipping Email Address" },
  [`shipping${fieldId.address}`]: { display: "Shipping Mailing Address" },
  [`shipping${fieldId.city}`]: { display: "Shipping City" },
  [`shipping${fieldId.state}`]: { display: "Shipping State" },
  [`shipping${fieldId.zip}`]: { display: "Shipping Zip Code" },
  ccName: { display: "Name on Card" },
  ccNumber: { display: "Credit Card Number" },
  ccExpirationMonth: { display: "Credit Card Expiration Month" },
  ccExpirationYear: { display: "Credit Card Expiration Year" },
  ccCVV: { display: "Credit Card Security Code" }
});

const handleCheckout = async (
  event,
  setOrderData,
  setIsLoading,
  isInternationalBilling,
  isInternationalShipping
  // eslint-disable-next-line max-params
) => {
  event.preventDefault();
  const requiredFields = getRequiredFields();
  const formData = new FormData(document.getElementById(checkoutFormId));
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  data.CID = localStorage.getItem(localStorageKeys.cid);

  let formIsValid = true;

  if (isInternationalShipping) {
    delete requiredFields[`shipping${fieldId.zip}`];
    delete requiredFields[`shipping${fieldId.state}`];
    delete requiredFields[`shipping${fieldId.city}`];
    delete requiredFields[`shipping${fieldId.address}`];

    data[`shipping${fieldId.zip}`] = "";
    data[`shipping${fieldId.state}`] = "";
    data[`shipping${fieldId.city}`] = "";
    data[`shipping${fieldId.address}`] = "";
    data[`shipping${fieldId.address2}`] = "";

    requiredFields.intlShippingAddress = {
      display: "International Shipping Label"
    };
  }

  if (isInternationalBilling) {
    delete requiredFields[`billing${fieldId.state}`];
    delete requiredFields[`billing${fieldId.city}`];

    data[`billing${fieldId.state}`] = "";
    data[`billing${fieldId.city}`] = "";
    data[`billing${fieldId.address2}`] = "";
  }

  Object.keys(requiredFields).map(field => {
    if (!data[field].length) {
      // eslint-disable-next-line no-alert
      alert(`Missing required field ${requiredFields[field].display}`);

      formIsValid = false;
    }
  });

  if (!formIsValid) {
    return setIsLoading(false);
  }

  let response;

  try {
    response = await fetch(
      `${checkoutUrl}${localStorage.getItem(localStorageKeys.cartId)}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

    if (response && response.ok) {
      const json = await response.json();

      if (json.orderComplete) {
        scrollToTop();
        localStorage.clear();
        setOrderData(data);
      }

      if (json.error && json.creditCardFailed) {
        setIsLoading(false);
        // eslint-disable-next-line no-alert
        alert("Your credit card could not be processed. Please try again.");
      }
    }
  } catch (error) {
    setIsLoading(false);
    // eslint-disable-next-line no-alert
    alert(
      `Something went wrong. Please try again. If the problem persists, please give us a call at ${app.phone}.`
    );
  }
};

const deleteItem = async (productId, setProducts) => {
  let response;

  try {
    response = await fetch(`${deleteItemUrl}${productId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ CID: localStorage.getItem(localStorageKeys.cid) })
    });

    if (response && response.ok) {
      const json = await response.json();

      setProducts(json.cart.products);
    }
  } catch (error) {
    // TODO: handle error
  }
};

const copyFromShipping = () => {
  let inputs = document
    .getElementById("shipping-form")
    .getElementsByTagName("input");

  inputs = Array.from(inputs);

  inputs.map(input => {
    const copyValue = input.value;
    const inputName = input.name.replace("shipping", "billing");

    try {
      const [currentInput] = document.getElementsByName(inputName);

      currentInput.value = copyValue;
    } catch (error) {
      // do nothing
    }
  });
};

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(zero);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderData, setOrderData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isInternationalBilling, setIsInternationalBilling] = useState(false);
  const [isInternationalShipping, setIsInternationalShipping] = useState(false);

  useEffect(() => {
    if (Object.keys(orderData).length) {
      setOrderComplete(true);
      setIsLoading(false);
    }
  }, [orderData]);

  useEffect(() => {
    const getCart = async () => {
      let response;
      const cartId = localStorage.getItem(localStorageKeys.cartId) || false;

      if (!cartId) {
        return setIsLoading(false);
      }

      try {
        response = await fetch(`${cartUrl}${cartId}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            CID: localStorage.getItem(localStorageKeys.cid)
          })
        });

        if (response && response.ok) {
          const json = await response.json();

          setCartTotal(json.cartTotal);
          setProducts(json.cart.products);
        }
      } catch (error) {
        // TODO: handle error
      }

      setIsLoading(false);
    };

    getCart();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const title = "Shopping Cart";

  if (!products.length) {
    return (
      <React.Fragment>
        <Helmet>
          <title>{routes.cart.metaTitle}</title>
        </Helmet>
        <Content alternateBackground>
          <h1>{title}</h1>
          <Text>There are no items in your cart. Go shop!</Text>
        </Content>
        <NetflixScroll />
        <TopFeatures />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{routes.cart.metaTitle}</title>
      </Helmet>
      <Content alternateBackground>
        <h1>{orderComplete ? "Receipt" : title}</h1>
        {orderComplete && (
          <React.Fragment>
            <Text gutterBottom={gutters.gutter}>
              Thank you! Your order has been received. We have sent an email to
              the email address you provided. Please be sure to keep that email
              and/or print this page in case you need to reference your order in
              the future.
            </Text>
            <Content half gutterBottom={gutters.gutter}>
              <div>
                <ReceiptAddress
                  orderData={orderData}
                  header={"Shipping Info"}
                  prefix={"shipping"}
                />
              </div>
              <div>
                <ReceiptAddress
                  orderData={orderData}
                  header={"Billing Info"}
                  prefix={"billing"}
                />
              </div>
            </Content>
          </React.Fragment>
        )}
        <StyledCartItemsContainer>
          <div className={"cart-header cart-row"}>
            <div>&nbsp;</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>
          {products.map((product, index) => {
            const { name, price, quantity, Logo, Base, Size, id } = product;

            return (
              <div className={"cart-row"} key={`product-${index}`}>
                <div>
                  <img
                    src={getImageFilePath(Logo || "boneyard")}
                    alt={`${app.name} ${name}`}
                  />
                  {name}
                  {Logo && <span>Logo: {Logo}</span>}
                  {Base && <span>Base: {Base}</span>}
                  {Size && <span>{Size}</span>}
                </div>
                <div>{price}</div>
                <div>
                  <em className={"mobile-only"}>Quantity:</em> {quantity}
                  {!orderComplete && allowCartItemDelete && (
                    <span
                      onClick={() => deleteItem(id, setProducts)}
                      role={"button"}
                      tabIndex={0}
                      onKeyPress={() => deleteItem(id, setProducts)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </span>
                  )}
                  {!orderComplete && allowCartItemEditQuantity && (
                    <span>
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                  )}
                </div>
                <div>{(price * quantity).toFixed(twoDecimals)}</div>
              </div>
            );
          })}
        </StyledCartItemsContainer>
        <StyledCartTotalContainer>
          <div className={"mobile-only"}>
            <Text mobileOnly={true}>
              Please provide us with your billing and shipping information
              below. We&apos;ll begin processing your order immediately, but we
              will not charge your card until your order has fully completed
              production and is leaving our facility.
            </Text>
          </div>
          <div className={"cart-totals"}>
            <div>
              Subtotal
              <span>{cartTotal.toFixed(twoDecimals)}</span>
            </div>
            <div>
              Shipping & Handling
              <span>FREE</span>
            </div>
            <div>
              *Total
              <span>${cartTotal.toFixed(twoDecimals)}</span>
            </div>
            <Text gutterTop={gutters.gutter} fontSize={fontSize.small}>
              *For orders shipped to Georgia, tax will be calculated and added
              after your order is received.
            </Text>
          </div>
        </StyledCartTotalContainer>
        {!orderComplete && (
          <form id={checkoutFormId} onSubmit={handleCheckout}>
            <StyledAddressFormsContainer>
              <Content half>
                <div>
                  <h2>Shipping Information</h2>
                  <AddressForm
                    prefix={formPrefixes.shipping}
                    handleIsInternationalShipping={setIsInternationalShipping}
                  />
                </div>
                <div>
                  <h2>
                    Billing Information
                    <span
                      role={"button"}
                      tabIndex={0}
                      onClick={copyFromShipping}
                      onKeyPress={copyFromShipping}
                      className={"copy-button"}
                    >
                      Copy from Shipping
                    </span>
                  </h2>
                  <AddressForm
                    prefix={formPrefixes.billing}
                    handleIsInternationalBilling={setIsInternationalBilling}
                  />
                </div>
              </Content>
            </StyledAddressFormsContainer>
            <StyledAddressFormsContainer>
              <Content half>
                <div>
                  <label htmlFor={"comments"}>Coupon Code / Comments</label>
                  <textarea
                    className="form-control"
                    name="comments"
                    cols="50"
                    rows="4"
                    id={"comments"}
                  />
                  <Text
                    mobileOnly={true}
                    gutterTop={gutters.gutter}
                    fontSize={fontSize.small}
                  >
                    Please note: The {app.scudo} is 100% CNC machined from the
                    body, caps, and screw machined hardware. Total time from
                    initial machining to final plating can take several weeks
                    per wallet. Our goal is to maintain proper inventory of all
                    logos and colors but, since this is a new product for us, we
                    are learning what colors and logos sell faster than others.
                    We may not have the exact color and logo option in stock. We
                    will process your request as soon as possible, and MGW will{" "}
                    <strong>never</strong> charge your card until the{" "}
                    {app.scudo}
                    is shipped.
                  </Text>
                  <Text
                    mobileOnly={true}
                    gutterTop={gutters.halfGutter}
                    fontSize={fontSize.small}
                  >
                    If you would like to input an alternate color in the case
                    the one you want is not in stock, please put the alternate
                    color in the comments section of your order. This will
                    expedite your order, and we will not have to contact you.
                  </Text>
                </div>
                <div>
                  <h2>Credit Card Info</h2>
                  <CreditCardForm />
                  <StyledTermsAcceptContainer>
                    <input
                      id="tosAgreed"
                      defaultChecked
                      name="tosAgreed"
                      type="checkbox"
                      value="agreed"
                    />
                    <label htmlFor={"tosAgreed"}>
                      I have read and agreed to the terms and conditions, refund
                      policy, and privacy policy.
                    </label>
                  </StyledTermsAcceptContainer>
                  <Content {...formRowProps}>
                    <StyledCreditCardContainer>
                      <span>
                        <FontAwesomeIcon icon={faCcMastercard} />
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faCcVisa} />
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faCcDiscover} />
                      </span>
                    </StyledCreditCardContainer>
                    <div>
                      <Button
                        text={"Place Order"}
                        handleOnClick={event => {
                          setIsLoading(true);
                          handleCheckout(
                            event,
                            setOrderData,
                            setIsLoading,
                            isInternationalBilling,
                            isInternationalShipping
                          );
                        }}
                      />
                    </div>
                  </Content>
                </div>
              </Content>
            </StyledAddressFormsContainer>
          </form>
        )}
      </Content>
    </React.Fragment>
  );
};

export default Cart;
