function isPalindrome(word) {
  // Write your algorithm here
  let lowerCaseWord = word.toLowerCase()
  let reversedWord = lowerCaseWord.split("").reverse().join("")
  if (lowerCaseWord === reversedWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  Take in a string as input.
  Convert the string to lowercase.
  Reverse the string.
  Check if original string is === with the reversed string.
*/

/*
  Add written explanation of your solution here
   Function isPalindrome takes in a string. It converts the string to lowercase using .toLowerCase() method and stores in a reversedWord
  variable.
  .split() method is used to split the lowercase string into an array of the individual letters of the string.
  .reverse() method is used to reverse the array.
  .join() method is used to join the reversed array.
  The function then checks if the original lowercase string is equal to the reversed string using deep equality operator (===).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
