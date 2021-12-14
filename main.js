let digits_list = [4, 8, 0, 9, 2, 0, 5, 8, 0, 4, 8];

digits_list = moveZerosToRight(digits_list);

console.log(digits_list);

digits_list = createNumberFromArrayAndAddOne(digits_list);

console.log(digits_list);

digits_list = multiplyEvenIndexesByMinusOne(digits_list);

console.log(digits_list);

max_subarray_sum = maximumSubarraySum(digits_list);

console.log(max_subarray_sum);

/*
Having a list of n digits where 0 <= digit <= 9 and where n is less than or equal to 100, arrange it to move all 0's to the right in O(n) time. Display this list in the console.
[4, 8, 0, 9, 2, 0, 5, 8, 0, 4, 8] -> [4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0]
*/

function moveZerosToRight(array) {
  return array.filter((e) => e > 0).concat(array.filter((e) => e === 0));
}

/*
Next, the previous list without zeros will represent a fictitious integer (48925848). Add 1 unit to it, leaving the final total as an array. Display this list in the console.
[4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0] -> [4, 8, 9, 2, 5, 8, 4, 9]
*/

function createNumberFromArrayAndAddOne(array) {
  const int_plus_one = +array.filter((e) => e > 0).join("") + 1;

  const int_array = String(int_plus_one)
    .split("")
    .map((n) => {
      return Number(n);
    });

  return int_array;
}

/*
Next, multiply each digit that is not a zero and in an even index, by -1. Display this list in the console.
[4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5, 8, -4, 9]
*/

function multiplyEvenIndexesByMinusOne(array) {
  return array.map((e, i) => {
    return i % 2 === 0 ? e * -1 : e;
  });
}

/*
Finally, detect the subarray, whose sum of digits is the maximum and return this sum. Display this sum in the console.
[-4, 8, -9, 2, -5, 8, -4, 9] -> 13
[8, -4, 9] is our maximum subarray and its sum is 13.
*/

function maximumSubarraySum(array) {
  let current_max = array[0];
  let max_ending = array[0];

  for (let i = 0; i < array.length; i++) {
    max_ending = Math.max(max_ending + array[i], array[i]);
    current_max = Math.max(current_max, max_ending);
  }

  return current_max;
}
