// solution 1
// var groupAnagrams = function(strs) {
//     let result=[];
//     let obj={};

//     strs.forEach((str,i)=>{
//         const strOriginal = str;
//         str=str.split("").sort().join("");
//         if(str in obj){
//             obj[str].push(strOriginal);
//         }
//         else{
//             obj[str]=[strOriginal]
//         }

//     })

//     for(anagrams in obj){
//         result.push(obj[anagrams]);
//     }
//     return result
// };
// solution 2
const hash = (key) => {
  return key.split("").sort().join("");
};
var groupAnagrams = function (strs) {
  const map = new Map();
  strs.forEach((str) => {
    const key = hash(str);
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  });
  return [...map.values()];
};
