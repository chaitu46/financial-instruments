import useSampleData from "./useSampleData";

describe("useSampleData", () => {
  test("gets the sample data", () => {
    const data = useSampleData();
    expect(data).toMatchSnapshot();
  });
});
