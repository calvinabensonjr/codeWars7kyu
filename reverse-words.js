https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

Instructions

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Solution:

function reverseWords(str) {
  // Go for it
  //params - str
  //return each word in the stings. spaces included
  //example - "drum" --> "murd"
//   console.log(str.split('').reverse('').join(''))
//   let a = str.split('')
//   let flipWords = a.reverse().join('')
//   console.log(flipWords.split(' ').reverse().join(' '))
//   console.log(flipWords.split('').reverse('').join(''))
// return flipWords.split(' ').reverse().join(' ')
  
  //simplified
  return str.split('').reverse('').join('').split(' ').reverse('').join(' ')
}
