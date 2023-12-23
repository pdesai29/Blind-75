var twoSum = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let result = [];
  while (l < r) {
    if (nums[l] + nums[r] === target) {
      result.push(l + 1);
      result.push(r + 1);
      return result;
    } else {
      if (nums[l] + nums[r] < target) {
        l++;
      } else {
        r--;
      }
    }
  }
};
