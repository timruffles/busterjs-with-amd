var config = module.exports;

config["Browser tests"] = {
  environment: "browser",
  rootPath: "../",
  libs: [
    "js/libs/require.js",
    "test/test_helper.js",
    "js/main.js"
  ],
  resources: [
    // serve all modules' so requirejs can request them - avoiding any
    // http://requirejs.org/docs/errors.html#mismatch errors
    "js/**/*.js"
  ],
  tests: [
    // preload all tests - we're using require() so they can be loaded without problem
    "test/**/*_test.js"
  ]
};
