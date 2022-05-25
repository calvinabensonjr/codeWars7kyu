/* https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript

Consecutive items

Instructions

You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.

Solution:
*/
//params- arr, a, b
  //return - false if not consecutive
  //example - if 1 & 2 are consecutive, return true, if not, return false
  //loop?
  //array
  //return a boolean(true or false)
  //indices need to be one after the other
// console.log(arr,a,b)

function consecutive(arr, a, b) {
const indexA = arr.indexOf(a)
const indexB = arr.indexOf(b)
  return Math.abs(indexA-indexB) === 1
}
