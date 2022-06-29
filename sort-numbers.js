/* https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript


Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []


Solution:
*/


  // let array = []
// let order = array.push(nums)
// if(order === []){
//   return null
// }else{
//   return order
// }
// console.log(order)
// let answer = order.sort()
  
 function solution(nums){
  //if nums is equivalent to null or []
  //return []
   
  if(nums === null || nums === []){
  return []
  }else{
    // sort the nums with a function using a & b
return nums.sort((a, b) => {
  // return a - b, to sort the number in numerical order
    return a - b

})
}
}

