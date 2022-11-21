module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off"
  },
  overrides: [{
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    env: {
      jest: true
    }
  }]
};