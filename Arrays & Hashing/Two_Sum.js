var twoSum = function (nums, target) {
  const obj = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in obj) {
      result.push(i);
      result.push(obj[target - nums[i]]);
      return result;
    }
    obj[nums[i]] = i;
  }
  return result;
};
