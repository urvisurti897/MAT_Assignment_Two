import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })

  test.todo("should throw an error if length is negative");
  test.todo("should throw an error if width is negative");
  test.todo("should throw an error if length is zero");
  test.todo("should throw an error if width is zero");
  test.todo("should throw an error if length is non-numeric");
  test.todo("should throw an error if width is non-numeric");
});
