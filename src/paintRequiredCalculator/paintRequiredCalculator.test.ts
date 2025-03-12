import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);
    expect(result).toEqual(5);
  });

  test("should throw an error when area is zero", () => {
    expect(() => paintRequiredCalculator(0, 10)).toThrow("Area should not be zero");
  });

  test("should throw an error when coveragePerLiter is zero", () => {
    expect(() => paintRequiredCalculator(50, 0)).toThrow("Coverage Per Liter should not be zero");
  });

  test.todo("should throw an error when area is negative");
  test.todo("should throw an error when coveragePerLiter is negative");

  test.todo("should handle when area is a decimal number");
  test.todo("should handle when coveragePerLiter is a decimal number");
});
