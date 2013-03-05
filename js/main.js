requirejs.config({
    baseUrl: 'js',
    shim: {
      "libs/backbone": {
        deps: ["libs/underscore","libs/zepto"],
        exports: "Backbone"
      },
      "libs/underscore": {
        deps: [],
        exports: "_"
      },
      "libs/zepto": {
        exports: "Zepto"
      }
    }
});

