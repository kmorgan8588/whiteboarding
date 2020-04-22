// https://www.algoexpert.io/questions/Three%20Number%20Sum

// integers in an array are distinct
// integers can be positive & negative
// find all sets of three integers that sum to the target sum
// return 2d array of triplet integers (each array is sorted in ascending order)
// if no three integers sum to the target, return empty array

/**
 * create empty result array
 * @param {Array} array
 * @param {Int} targetSum
 * @returns {Array} - a 2D array
 */
// function threeNumberSum(array, targetSum = 0) {//naive solution
//     array.sort((a,b) => a - b); //O(n log n) in place
//     const result = [];
//     // O(n^3) optimized by not offsetting indeces and shortening iterations
//     if(array.length >= 3) {//don't do work if input is bad
//         for (let i = 0; i < array.length - 2; i++) {
//             let num1 = array[i];
//             for (let j = i + 1; j < array.length - 1; j++) {
//                 let num2 = array[j];
//                 for (let k = j + 1; k < array.length; k++) {
//                     let num3 = array[k];
//                     if (targetSum === (num1 + num2 + num3)) {
//                         result.push([num1, num2, num3]);
//                     }
//                 }
//             }
//         }
//     }

//     return result;
// }

function threeNumberSum(array, targetSum = 0) {
    const result = [];
    if(array.length >= 3) {
        array.sort((a,b) => a - b);
        for (let i = 0; i < array.length - 2; i++) {
            let j = i + 1;
            let k = array.length - 1;

            while (j < k) {
                let [num1, num2, num3] = [array[i], array[j], array[k]];
                let sum = num1 + num2 + num3;
                if (sum === targetSum) {
                    
                    result.push([num1, num2, num3]);
                    j++;
                    k--;
                } else if (sum < targetSum) {
                    j++;
                } else {
                    k--;
                }
            }
        }

    }

    return result;
};

// console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0));
// console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0));

// Do not edit the line below.
module.exports = { threeNumberSum };
