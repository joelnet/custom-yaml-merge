// const deepmerge = require("deepmerge");
const deepmerge = require("lodash.merge");
const yaml = require("js-yaml");

const merge = (rawYaml, overrideYaml) => {
  const json = yaml.load(rawYaml);
  const overrides = yaml.load(overrideYaml);
  const merged = deepmerge(json, overrides);
  return merged;
};

module.exports = {
  merge,
};
