import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });

  test.todo("should throw an error when area is zero");
  test.todo("should throw an error when coveragePerLiter is zero");
  test.todo("should throw an error when area is negative");
  test.todo("should throw an error when coveragePerLiter is negative");
  test.todo("should handle when area is decimal number");
  test.todo("should handle when coveragePerLiter is decimal number");
});
