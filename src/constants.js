// COLORS: all the colors using in application can be controlled from here.
export const COLORS = {
  blue: "#1d4289",
  red: "#d3273e",
  green: "#007a78",
  white: "white",
  black: "black",
  darkGrey: "#303030",
  lightGrey: "#cccccc",
};

export const ASSERT_ID = "assertClass";
export const TICKER_ID = "ticker";
export const PRICE_ID = "price";

export const COLUMN_NAMES = ["Asset Class", "Ticker", "Price"];
export const COLUMN_IDS = [ASSERT_ID, TICKER_ID, PRICE_ID];
export const ASSERT_CUSTOM_ORDER = ["Equities", "Macro", "Credit"];

// ROW_THEME: this object helps to get different color combinations for different set of rows in table also it helps to achieve clean code.
export const ROW_THEME = {
  Macro: {
    bg: COLORS.white,
  },
  Equities: {
    bg: COLORS.blue,
    color: COLORS.white,
  },
  Credit: {
    bg: COLORS.green,
    color: COLORS.white,
  },
};
