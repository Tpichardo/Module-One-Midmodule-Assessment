/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {
  return (arr[0] + arr.pop()) / 2 || null
// if(arr.length < 2){
//   return null
// }else{ return (arr[0] + arr.pop()) / 2 }



// if(arr.length < 2){
//   return null
// }else{ return (arr.shift() + arr.pop()) / 2 }
}

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr) {
return [...arr, ...arr]
// return arr.concat(arr) this also works b/c you are joining the 2 arrays
}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
  return arr.splice(3, arr.length)// this also works, also works with just 1 argument 
/// this is the same as ommiting the end
//return arr.slice(3) // if there is no end, it extracts till the end of the sequence
  //.slice() will remove the elemets and takes in an argument that represents the start of the index which it starts xtracting. Here, I am returning at index 3, and removed 0,1,and 2.
}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}
