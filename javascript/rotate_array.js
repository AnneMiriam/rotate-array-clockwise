function rotateArray(arr, k) {
  // type your code here
  const len = arr.length;
  if (len === 0) {
    return arr
  }
  // modulo should help handle cases where k > arr.length
  k = k%len
  let rotatedArr = new Array(len)

  // copy elements from len - k to end
  for (let i = len-k, j = 0; i < len; i++, j++) {
    rotatedArr[j] = arr[i];
  }
  // Copy elements from beginning to length - k
  for (let i = 0, j = k; i < len - k; i++, j++) {
    rotatedArr[j] = arr[i];
  }
  return rotatedArr;

  // !school solution
  //* const rotations = k % arr.length;
  //  This line calculates the effective number of rotations needed. Since rotating an array by its length or multiples of its length results in the same array, the modulo operation ensures that rotations is within the range [0, arr.length - 1].
  
  //* const removed = arr.splice(arr.length - rotations, rotations);
  //  This line uses the splice method to remove elements from the array arr. It starts removing elements from the index arr.length - rotations (which is the index from where the rotation starts) and removes rotations number of elements. The removed elements are stored in the removed variable.

  //* return removed.concat(arr);
  //  This line concatenates the removed elements (removed) with the original array (arr) after the rotation. Since removed contains the elements that were shifted to the end of the array due to rotation, and arr contains the remaining elements in their original order, concatenating them effectively rotates the array by k units clockwise
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [ 3, 4, 1, 2 ]");
  console.log("=>", rotateArray([1, 2, 3, 4], 6));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
