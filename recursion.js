/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}


/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length === 0) return 0;
  let firstWord = words[0].length;
  let maxLenOfRest = longest(words.slice(1));
  return Math.max(firstWord, maxLenOfRest);

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if(i >= str.length) return "";
  if(i%2 === 0) {
    return str[i] + everyOther(str, i+1);
  } else {
    return everyOther(str, i+1);
  }

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) { //"tacocat"
  if(str.length <= 1) return true;
  strArr = str.split(""); // [t,a,c,o,c,a,t]
  if(str[0] === strArr[strArr.length - 1]){
    strArr.shift();
    strArr.pop();
    return isPalindrome(strArr.join("")); //"acoca"
  }  else {
    return false
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, currentIdx = 0) {
  if(currentIdx >= arr.length) return -1;
  if(arr[currentIdx] === val) {
    return currentIdx;
  } else {
    return findIndex(arr, val, currentIdx + 1)
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, endPoint = str.length -1) {
  if(endPoint < 0) return "";
  return str[endPoint] + revString(str, endPoint -1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for(let key in obj) {
    if(typeof obj[key] ===  "string") {
      result.push(obj[key]);
    } else if (typeof obj[key]=== "object") {
      result = result.concat(gatherStrings(obj[key]));
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if(arr.length === 0) return -1;

  let midIdx = Math.floor((arr.length) / 2 );
  if(arr[midIdx] === val) {
    return midIdx;
  } else {

    if(arr[midIdx] < val) {
      let higherArr = arr.slice(midIdx + 1); 
      let result = binarySearch(higherArr, val);
      return result !== -1 ? midIdx + 1 + result : -1; 
    } else {
      let lowerArr = arr.slice(0, midIdx);
      return binarySearch(lowerArr, val);
    }
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
