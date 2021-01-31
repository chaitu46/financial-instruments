import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./hooks/useSampleData", () => () => testData);

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
    ticker: "IOTA",
    price: -1096.64,
    assetClass: "Macro",
  },
  {
    ticker: "GAMMA",
    price: 2299.1,
    assetClass: "Equities",
  },
];

describe("App", () => {
  test("renders default app", () => {
    render(<App />);
    const pageHeading = screen.getByRole("heading");
    const table = screen.getByRole("table");

    expect(pageHeading).toHaveTextContent("Financial Instruments - Assessment");
    expect(table).toBeVisible();
    expect(table).toHaveAttribute("aria-label", "Financial Details");
    expect(table).toMatchSnapshot();
  });
});
