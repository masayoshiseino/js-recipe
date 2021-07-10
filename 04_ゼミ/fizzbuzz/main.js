const FizzBuzz = function (number) {
    for (let n = 1; n <= number; n++) {
      if (n % 15 === 0) {
        console.log("FizzBuzz");
      } else if (n % 3 === 0) {
        console.log("Fizz");
      } else if (n % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(n);
      }
    }
  };
  FizzBuzz(30);
  // && <条件をどちらも満たす
  // || <最低どちらかは満たす
  
  