testCase("SanityTest",[
  "libs/underscore"
],function(
  _,
  run
) {
  run({
    "test we have underscore": function() {
      var librariesUsed = {underscore:1,backbone:1,zepto:1,requirejs:1};
      assert.equals(3,_.keys(_.omit(librariesUsed,"zepto")).length);
    }
  });
});
