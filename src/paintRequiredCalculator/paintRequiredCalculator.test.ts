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

  test("should throw an error when area is negative", () => {
    expect(() => paintRequiredCalculator(-50, 10)).toThrow("Area should be positive");
  });

  test("should throw an error when coveragePerLiter is negative", () => {
    expect(() => paintRequiredCalculator(50, -10)).toThrow("Coverage Per Liter should be positive");
  });


  test("should handle when area is a decimal number", () => {
    expect(() => paintRequiredCalculator(2.5, 10)).toThrow("Area should not be decimal number");
  });

  test("should handle when coveragePerLiter is a decimal number", () => {
    expect(() => paintRequiredCalculator(50, 4.5)).toThrow("Coverage Per Liter should not be decimal number");
  });



  test.todo("should handle when area is a decimal number");
  test.todo("should handle when coveragePerLiter is a decimal number");
});
