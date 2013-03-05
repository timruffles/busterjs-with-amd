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


