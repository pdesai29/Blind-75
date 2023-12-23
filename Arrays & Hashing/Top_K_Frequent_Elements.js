// var topKFrequent = function(nums, k) {
//     const obj = {};
//     const temp=Array(nums.length).fill(0);
//     let result = [];
//     if(k===1&& nums.length ===1){
//         return nums;
//     }
//     nums.forEach(num=>{
//         if(num in obj){
//             obj[num]++
//         }else{
//             obj[num]=1
//         }
//     });

//     for(key in obj){
//         if(temp[obj[key]]){
//             temp[obj[key]].push(key);
//         }else{
//             temp[obj[key]]=[key]
//         }
//     }
//     for(let i=temp.length-1;i>0;i--){
//         if(temp[i]!==0){
//             result=[...result,...temp[i]]
//             console.log(result)
//             if(result.length === k || result.length>k){
//                 return result;
//             }
//         }
//     }

// };
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};
