import { fireEvent, render, screen } from "@testing-library/react";
import { Table } from "./Table";
import { ASSERT_ID, COLUMN_NAMES, PRICE_ID, TICKER_ID } from "./constants";

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
});
