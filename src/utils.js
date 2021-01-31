import {
  ASSERT_CUSTOM_ORDER,
  ASSERT_ID,
  PRICE_ID,
  TICKER_ID,
} from "./constants";

export function getSortDataByColumnName(sortByColumn, initialData) {
  switch (sortByColumn) {
    case ASSERT_ID: {
      return [
        ...initialData.sort(
          (a, b) =>
            ASSERT_CUSTOM_ORDER.indexOf(a.assetClass) -
            ASSERT_CUSTOM_ORDER.indexOf(b.assetClass)
        ),
      ];
    }
    case PRICE_ID: {
      return [...initialData.sort((a, b) => b.price - a.price)];
    }
    case TICKER_ID: {
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
