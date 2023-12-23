// var isPalindrome = function(s) {
//     s=s.toLowerCase();
//     for(let char of s){
//         // console.log(char);
//         if(!("abcdefghijklmnopqrstuvwxyz0123456789".includes(char))){
//             s=s.split(char).join("")
//         }
//     }
//     // console.log(s);
//     return s === s.split("").reverse().join("");
// };

const isAlpha = (char) => {
  return "abcdefghijklmnopqrstuvwxyz0123456789".includes(char);
};
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let l = 0;
  let r = s.length;
  while (l < r) {
    while (l < r && !isAlpha(s[l])) {
      l++;
    }
    while (r > l && !isAlpha(s[r])) {
      r--;
    }
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};
