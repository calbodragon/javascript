function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    console.log(myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  function myLocalScope() {
    var myVar;
    console.log(myVar);
  }
  myLocalScope()
  // Now remove the console log line to pass the test
  