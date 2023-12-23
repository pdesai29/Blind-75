var containsDuplicate = function (nums) {
  // solution 1:
  //    let hasDuplicate = false
  //     nums = nums.sort((a,b)=>{
  //         if(a===b) hasDuplicate = true;
  //         return a-b});

  //     return hasDuplicate;

  // solution 2:
  const s = new Set(nums);
  return s.size !== nums.length;
};
