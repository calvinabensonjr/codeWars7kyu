/* https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript

Fizz Buzz

Instructions

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/

//Solution:

function fizzbuzz(n){
  //
     let array = []
//   //loop
   for(let i = 1; i <= n; i++){
    
//     //conditional
     if(i % 15 === 0){
     array.push("FizzBuzz")
//        console.log(array.push("Fizz"))
       
   }else if(i % 3 === 0){
     
     array.push("Fizz")
//      console.log(array)
     
   }else if(i % 5 === 0){
     
     array.push("Buzz")
   }else{
      array.push(i)
   } 
     
}
 return array;
}



