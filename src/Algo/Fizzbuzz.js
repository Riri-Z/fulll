

function fizzbuzz(number) {

  for (var i = 1; i <number ; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log( "FizzBuzz" )
    }
  
    if (i % 3 === 0) {
      console.log( "Fizz" )
    }
  
    if (i % 5 === 0) {
      console.log( "Buzz" )
    }

    console.log(i)    
  }
  
}

console.log(fizzbuzz(101))