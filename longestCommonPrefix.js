function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "Empty array";
  }

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
      j++;
    }
    prefix = prefix.substring(0, j);
    if (prefix === "") {
      return "";
    }
  }
  return prefix;
}

// Test Cases
const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1)); // Output: "fl"

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2)); // Output: ""

const strs3 = [];
console.log(longestCommonPrefix(strs3)); // Output: "Empty array"npx