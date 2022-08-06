"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.mergeGatsbyConfig = void 0;

var _uniq2 = _interopRequireDefault(require("lodash/uniq"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _uniqWith2 = _interopRequireDefault(require("lodash/uniqWith"));

var _merge2 = _interopRequireDefault(require("lodash/merge"));

var _isObject2 = _interopRequireDefault(require("lodash/isObject"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

/**
 * Normalize plugin spec before comparing so
 *  - `gatsby-plugin-name`
 *  - { resolve: `gatsby-plugin-name` }
 *  - { resolve: `gatsby-plugin-name`, options: {} }
 * are all considered equal
 */
const normalizePluginEntry = entry => (0, _isString2.default)(entry) ? {
  resolve: entry,
  options: {}
} : (0, _isObject2.default)(entry) ? {
  options: {},
  ...entry
} : entry;

const howToMerge = {
  /**
   * pick a truthy value by default.
   * This makes sure that if a single value is defined, that one it used.
   * We prefer the "right" value, because the user's config will be "on the right"
   */
  byDefault: (a, b) => b || a,
  siteMetadata: (objA, objB) => (0, _merge2.default)({}, objA, objB),
  // plugins are concatenated and uniq'd, so we don't get two of the same plugin value
  plugins: (a = [], b = []) => (0, _uniqWith2.default)(a.concat(b), (a, b) => (0, _isEqual2.default)((0, _pick2.default)(normalizePluginEntry(a), [`resolve`, `options`]), (0, _pick2.default)(normalizePluginEntry(b), [`resolve`, `options`]))),
  mapping: (objA, objB) => (0, _merge2.default)({}, objA, objB)
};
/**
 * Defines how a theme object is merged with the user's config
 */

const mergeGatsbyConfig = (a, b) => {
  // a and b are gatsby configs, If they have keys, that means there are values to merge
  const allGatsbyConfigKeysWithAValue = (0, _uniq2.default)(Object.keys(a).concat(Object.keys(b))); // reduce the array of mergable keys into a single gatsby config object

  const mergedConfig = allGatsbyConfigKeysWithAValue.reduce((config, gatsbyConfigKey) => {
    // choose a merge function for the config key if there's one defined,
    // otherwise use the default value merge function
    const mergeFn = howToMerge[gatsbyConfigKey] || howToMerge.byDefault;
    return { ...config,
      [gatsbyConfigKey]: mergeFn(a[gatsbyConfigKey], b[gatsbyConfigKey])
    };
  }, {}); // return the fully merged config

  return mergedConfig;
};

exports.mergeGatsbyConfig = mergeGatsbyConfig;
//# sourceMappingURL=merge-gatsby-config.js.map