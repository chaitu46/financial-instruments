import { fireEvent, render, screen } from "@testing-library/react";
import { Table } from "./Table";
import {
  ASSERT_ID,
  COLORS,
  COLUMN_NAMES,
  PRICE_ID,
  TICKER_ID,
} from "./constants";

const testData = [
  {
    ticker: "BETA",
    price: 3791.37,
    assetClass: "Equities",
  },
  {
    ticker: "EPSILON",
    price: 1168.46,
    assetClass: "Credit",
  },
  {
    ticker: "EPSILON",
    price: -1096.64,
    assetClass: "Macro",
  },
  {
    ticker: "GAMMA",
    price: 2299.1,
    assetClass: "Equities",
  },
];

describe("Table", () => {
  test("renders default Table", () => {
    render(<Table initialData={testData} />);
    const table = screen.getByRole("table");
    const headerButtons = screen.getAllByRole("button");

    expect(table).toBeVisible();
    expect(table).toHaveAttribute("aria-label", "Financial Details");
    expect(headerButtons).toHaveLength(3);
    headerButtons.map((button, index) =>
      expect(button).toHaveTextContent(COLUMN_NAMES[index])
    );
    expect(screen.getByTestId(ASSERT_ID)).toHaveAttribute(
      "data-active",
      "false"
    );
    expect(screen.getByTestId(PRICE_ID)).toHaveAttribute(
      "data-active",
      "false"
    );
    expect(screen.getByTestId(TICKER_ID)).toHaveAttribute(
      "data-active",
      "false"
    );
    expect(table).toMatchSnapshot();
  });

  test("simulate asset class column sort click", () => {
    render(<Table initialData={testData} />);
    const table = screen.getAllByRole("table");
    expect(table).toMatchSnapshot();
    fireEvent.click(screen.getByTestId(ASSERT_ID));
    expect(table).toMatchSnapshot();
    expect(screen.getByTestId(ASSERT_ID)).toHaveAttribute(
      "data-active",
      "true"
    );
    expect(screen.getByTestId(PRICE_ID)).toHaveAttribute(
      "data-active",
      "false"
    );
    expect(screen.getByTestId(TICKER_ID)).toHaveAttribute(
      "data-active",
      "false"
    );
  });
  test("simulate ticker column sort click", () => {
    render(<Table initialData={testData} />);
    const table = screen.getAllByRole("table");

    expect(table).toMatchSnapshot();
    fireEvent.click(screen.getByTestId(TICKER_ID));
    expect(table).toMatchSnapshot();
    expect(screen.getByTestId(ASSERT_ID)).toHaveAttribute(
      "data-active",
      "false"
    );
    expect(screen.getByTestId(PRICE_ID)).toHaveAttribute(
      "data-active",
      "false"
    );
    expect(screen.getByTestId(TICKER_ID)).toHaveAttribute(
      "data-active",
      "true"
    );
  });
  test("simulate price column sort click", () => {
    render(<Table initialData={testData} />);
    const table = screen.getAllByRole("table");

    expect(table).toMatchSnapshot();
    fireEvent.click(screen.getByTestId(PRICE_ID));
    expect(table).toMatchSnapshot();
    expect(screen.getByTestId(ASSERT_ID)).toHaveAttribute(
      "data-active",
      "false"
    );
    expect(screen.getByTestId(PRICE_ID)).toHaveAttribute("data-active", "true");
    expect(screen.getByTestId(TICKER_ID)).toHaveAttribute(
      "data-active",
      "false"
    );
  });

  test("simulate price column sort twice and ensure nothing changed", () => {
    render(<Table initialData={testData} />);
    fireEvent.click(screen.getByTestId(PRICE_ID));
    expect(screen.getByTestId(ASSERT_ID)).toHaveAttribute(
      "data-active",
      "false"
    );
    expect(screen.getByTestId(PRICE_ID)).toHaveAttribute("data-active", "true");
    expect(screen.getByTestId(TICKER_ID)).toHaveAttribute(
      "data-active",
      "false"
    );
    const mockGetSortByColumnName = jest.fn();
    jest.mock("./utils", () => ({
      getSortDataByColumnName: () => mockGetSortByColumnName,
    }));
    fireEvent.click(screen.getByTestId(PRICE_ID));
    expect(mockGetSortByColumnName).not.toBeCalled();
  });
  test("background colors of the table rows should be in blue when asset value is 'Equities'", () => {
    const testData = [
      {
        ticker: "BETA",
        price: 3791.37,
        assetClass: "Equities",
      },
    ];
    render(<Table initialData={testData} />);
    expect(screen.getByText("Equities").parentElement).toHaveStyle(
      `background-color: ${COLORS.blue}`
    );
  });
  test("background colors of the table rows should be in white when asset value is 'Macro'", () => {
    const testData = [
      {
        ticker: "BETA",
        price: 3791.37,
        assetClass: "Macro",
      },
    ];
    render(<Table initialData={testData} />);
    expect(screen.getByText("Macro").parentElement).toHaveStyle(
      `background-color: ${COLORS.white}`
    );
  });
  test("background colors of the table rows should be in green when asset value is 'Credit'", () => {
    const testData = [
      {
        ticker: "BETA",
        price: 3791.37,
        assetClass: "Credit",
      },
    ];
    render(<Table initialData={testData} />);
    expect(screen.getByText("Credit").parentElement).toHaveStyle(
      `background-color: ${COLORS.green}`
    );
  });
  test("Price cell background color should be in blue if the price value is positive'", () => {
    const testData = [
      {
        ticker: "BETA",
        price: 3791.37,
        assetClass: "Credit",
      },
    ];
    render(<Table initialData={testData} />);
    expect(screen.getByText("3791.37")).toHaveStyle(
      `background-color: ${COLORS.blue}`
    );
  });
  test("Price cell background color should be in red if the price value is negative'", () => {
    const testData = [
      {
        ticker: "BETA",
        price: -3791.37,
        assetClass: "Credit",
      },
    ];
    render(<Table initialData={testData} />);
    expect(screen.getByText("-3791.37")).toHaveStyle(
      `background-color: ${COLORS.red}`
    );
  });
});
