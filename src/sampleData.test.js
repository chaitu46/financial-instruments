import getSampleData from "./sampleData";

describe("getSampleData", () => {
  test("get the sample data", () => {
    const data = getSampleData();
    expect(data).toMatchSnapshot();
  });
});
