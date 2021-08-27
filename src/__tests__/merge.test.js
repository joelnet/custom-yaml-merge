const { merge } = require("../merge");
const fs = require("fs");

describe("merge.js", () => {
  let rawYaml;
  let overrideYaml;

  beforeAll(() => {
    rawYaml = fs.readFileSync(process.cwd() + "/src/main.yaml", "utf8");
    overrideYaml = fs.readFileSync(
      process.cwd() + "/src/overrides.yaml",
      "utf8"
    );
  });

  test("modifies color.primary", () => {
    const expected = "orange";
    const actual = merge(rawYaml, overrideYaml).colors.primary;
    expect(actual).toStrictEqual(expected);
  });

  test("inserts color.custom", () => {
    const expected = "pink";
    const actual = merge(rawYaml, overrideYaml).colors.custom;
    expect(actual).toStrictEqual(expected);
  });

  test("modifies body.color", () => {
    const expected = "orange";
    const actual = merge(rawYaml, overrideYaml).body.color;
    expect(actual).toStrictEqual(expected);
  });

  test("modifies deep.merge.test.background-color", () => {
    const expected = "red";
    const actual = merge(rawYaml, overrideYaml).deep.merge.test[
      "background-color"
    ];
    expect(actual).toStrictEqual(expected);
  });

  test("does not modify error.color", () => {
    const expected = "red";
    const actual = merge(rawYaml, overrideYaml).error.color;
    expect(actual).toStrictEqual(expected);
  });
});
