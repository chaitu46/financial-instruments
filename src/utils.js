import {
  ASSERT_CUSTOM_ORDER,
  ASSERT_ID,
  PRICE_ID,
  TICKER_ID,
} from "./constants";

/**
 * getSortDataByColumnName is function used to sort the table data based on the column value.
 * @param {string} sortByColumn
 * @param {Array.<{assetClass: string, price: number, ticker: string}>} initialData
 * @returns {Array.<{assetClass: string, price: number, ticker: string}>}
 */
export function getSortDataByColumnName(sortByColumn, initialData) {
  switch (sortByColumn) {
    case ASSERT_ID: {
      // below will sort the table data by Equities first, then Macro and Credit last and return a new instance of Array.
      return [
        ...initialData.sort(
          (a, b) =>
            ASSERT_CUSTOM_ORDER.indexOf(a.assetClass) -
            ASSERT_CUSTOM_ORDER.indexOf(b.assetClass)
        ),
      ];
    }
    case PRICE_ID: {
      // below will sort the table data by Price in descending order and return a new instance of Array.
      return [...initialData.sort((a, b) => b.price - a.price)];
    }
    case TICKER_ID: {
      // below will sort the table data by Ticker in alphabetical order and return a new instance of Array.
      return [
        ...initialData.sort((a, b) => {
          if (a.ticker < b.ticker) return -1;
          if (a.ticker > b.ticker) return 1;
          return 0;
        }),
      ];
    }
    default:
      return initialData;
  }
}
