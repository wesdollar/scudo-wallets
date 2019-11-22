/* eslint-disable no-magic-numbers */
import { lighten } from "polished";

const black = "#4e4e4e";

export const colors = {
  white: "#f9f9f9",
  black,
  primary: "#e91414",

  lightGrey: "#fcfcfc",
  mediumGrey: "#ededed",
  darkGrey: "#bfbfbf",

  lightBlack: lighten(0.1, black),
  mediumBlack: lighten(0.2, black),

  text: {
    primary: black
  }
};
