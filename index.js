module.exports = {
  extends: ["eslint:recommended"],
  env: {
    es2020: true,
    node: true
  },
  rules: {
    eqeqeq: "error",
    "consistent-return": "error",
    curly: "error",
    "default-case": "error",
    "default-param-last": "error",
    "linebreak-style": "error",
    quotes: "error",
    "prefer-destructuring": "error",
    semi: "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-arrow-callback": "error",
    "no-useless-rename": "error",
    "no-useless-constructor": "error",
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "no-shadow": "error",
    "prefer-object-spread": "error",
    "no-else-return": "error",
    "no-eval": "error",
    "no-param-reassign": "error",
    "no-return-await": "error",
    "no-fallthrough": "error",
    "require-await": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error"
  }
};
