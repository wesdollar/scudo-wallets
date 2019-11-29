import styled from "styled-components";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";
import { colors } from "../../constants/colors";
import { fontSize } from "../../constants/fontSizes";
import { breakpoint } from "../../constants/breakpoints";

export const StyledCartItemsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: ${px(gutters.gutter)};
  background: ${colors.white};
  margin-bottom: ${px(gutters.doubleGutter)};

  @media (max-width: ${breakpoint.phone}) {
    em.mobile-only {
      font-size: ${fontSize.small};
    }
  }

  .mobile-only {
    display: none;

    @media (max-width: ${breakpoint.phone}) {
      display: inline-block;
    }
  }

  .cart-row {
    display: flex;
    width: 100%;
    margin-bottom: ${px(gutters.halfGutter)};

    &:last-of-type {
      margin-bottom: 0;
    }

    div {
      flex-grow: 1;
      width: 15%;

      &:first-of-type {
        width: 55%;
        flex-grow: 2;

        img {
          float: left;
          width: 125px;
          height: auto;
          margin-right: ${px(gutters.gutter)};
        }

        span {
          display: block;
          font-size: 0.8em;
          line-height: 1.4em;
        }
      }

      &:nth-of-type(2) {
        text-align: right;

        @media (max-width: ${breakpoint.phone}) {
          display: none !important;
        }
      }

      &:nth-of-type(3) {
        text-align: center;

        span {
          font-size: 0.7em;
          float: right;
          padding: 0 5px;
          display: inline-block;

          &:last-of-type {
            padding-right: 0;
          }

          &:hover {
            cursor: pointer;
          }
        }
      }

      &:last-of-type {
        text-align: right;
      }
    }
  }

  @media (max-width: ${breakpoint.phone}) {
    .cart-header {
      display: none !important;
    }

    div {
      display: block !important;
      width: 100% !important;
      text-align: left !important;
    }

    img {
      display: block !important;
      width: 100% !important;
      height: auto !important;
    }
  }
`;

export const StyledCartTotalContainer = styled.div`
  display: flex;
  //flex-flow: row wrap;
  justify-content: space-evenly;

  @media (max-width: ${breakpoint.phone}) {
    display: block;
  }

  > div {
    width: 50%;
    padding: 0 ${px(gutters.gutter)};

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }

    @media (max-width: ${breakpoint.phone}) {
      width: 100%;
    }
  }

  .cart-totals {
    display: block;
    text-align: right;

    span {
      width: 100px;
      display: inline-block;
      padding-left: ${px(gutters.gutter)};
    }
  }
`;

export const StyledAddressFormsContainer = styled.div`
  margin-top: ${px(gutters.doubleGutter)};
`;

export const StyledTermsAcceptContainer = styled.div`
  label {
    font-size: ${fontSize.small};
    padding-left: ${px(gutters.smallGutter)};
  }
`;

export const StyledCreditCardContainer = styled.div`
  position: relative;
  top: 42px;

  @media (max-width: ${breakpoint.phone}) {
    top: 0;
    padding-top: ${px(gutters.halfGutter)} !important;
    order: 2;
  }

  span {
    display: inline-block;
    padding-right: ${px(gutters.smallGutter)};
    font-size: 2em;
  }
`;
