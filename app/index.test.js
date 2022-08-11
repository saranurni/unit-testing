import { add2Nums, calculateTip, greet } from "./index.js";

test("5 + 6 = 11", () => {
  expect(add2Nums(5, 6)).toBe(11);
});

describe("greet", () => {
  // Happy path test
  test("it greets with the correct name", () => {
    expect(greet("Sara")).toBe("Hello, Sara!");
    expect(greet("Jane")).toBe("Hello, Jane!");
  });

  // Sad path test
  test("greets anonymous", () => {
    expect(greet()).toBe("Hello, Anonymous!");
  });
});

describe("calculateTip", () => {
  it("calculates a $10 tip on a $100 tab at 10%", () => {
    expect(calculateTip(100, 10)).toBe(10);
    expect(calculateTip(100, 20)).toBe(20);
  });

  it("calculates with a default tip of 20%", () => {
    expect(calculateTip(100)).toBe(20);
  });
});
