# Buster.js with Require.js (or other AMD loader)

This project demonstrates how to use AMD loaders (in this case require.js) and Backbone together happily. Require.js works as normal, and this runs fine in both `buster server` and `buster static`.

The one know issue is undefined test names, due to an unfixed ticket in buster itself: https://github.com/busterjs/buster/issues/238.

It also demonstrates how to use Backbone.js with this setup, using require.js's shims config to correctly load in the non-AMD underscore.js and zepto.

## Test Case Helper

A helper function is defined to neaten up using buster and require together. We need to tell buster about the test immediately, and then define the test cases asynchronously after require has given us our dependencies. Without the helper you'd therefore need to do:

    buster.testCase("SanityTest",function(run) {
      require([
        "libs/underscore"
      ],function(
        _
      ) {
        run({
          "test we have underscore": function() {
            var librariesUsed = {underscore:1,backbone:1,zepto:1,requirejs:1};
            assert.equals(3,_.keys(_.omit(librariesUsed.length,"zepto").length);
          }
        });
      });
    });

The `testCase` helper simplifies this as follows. Just remember to add the `run` function onto the end of your callback for require.

    testCase("SanityTest",[
      "libs/underscore"
    ],function(
      _,
      run
    ) {
      run({
        "test we have underscore": function() {
          var librariesUsed = {underscore:1,backbone:1,zepto:1,requirejs:1};
          assert.equals(3,_.keys(_.omit(librariesUsed.length,"zepto").length);
        }
      });
    });

This is how it works (in `test/test_helper.js`) - no magic:

    window.testCase = function(name,deps,fn) {
      // first define the test case synchronously
      buster.testCase(name, function(run){
        require(deps,function() {
          // require our deps, then pass through with our run()
          // callback concatentated to the end of the list of dependencies
          fn.apply(null,[].slice.call(arguments).concat(run));
        });
      });
    };


