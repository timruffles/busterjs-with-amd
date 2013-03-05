testCase("Backbone",[
  "libs/backbone",
],function(
  Backbone,
  run
) {
  run({
    "test backbone has loaded ok": function() {
      assert.defined(Backbone.Model);
    }
  })
});

