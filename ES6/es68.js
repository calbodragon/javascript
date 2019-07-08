const squareList = (arr) => {
    "use strict";
    const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
    return squaredIntegers;
  };

  // test your code
  const squaredIntegers = squareList(realNumberArray);
  console.log(squaredIntegers);