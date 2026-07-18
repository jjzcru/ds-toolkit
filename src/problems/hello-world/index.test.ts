import { describe, it, expect } from "vite-plus/test";
import { helloWorld } from ".";

describe("helloWorld", () => {
  it("returns the greeting string", () => {
    expect(helloWorld()).toBe("Hello, World!");
  });
});
