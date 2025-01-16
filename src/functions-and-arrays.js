// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a
    } else if (a < b) {
        return b
    } else {
        return a, b
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {

    let currentWord = "";


    for (let i = 0; i < arr.length; i++) {

        if (currentWord.length < arr[i].length) {
            currentWord = arr[i];

        }
    }
    return currentWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(sum);
    }
    return sum;
}





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        sumAverage = sum/arr.length;
        if (arr === "") {
            return 0;
        }
    }
    return sumAverage;
}
 




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, searchWord) {

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchWord) {
        return true
    } 
}
    return false
}
