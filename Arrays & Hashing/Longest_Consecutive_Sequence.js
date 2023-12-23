const longestConsecutive = (nums) => {
  const set = new Set(nums);
  let longestSequence = 0;

  for (const num of set) {
    if (set.has(num - 1)) continue;
    let currentNum = num;
    let currentSequence = 1;

    while (set.has(currentNum + 1)) {
      currentNum++;
      currentSequence++;
    }

    longestSequence = Math.max(longestSequence, currentSequence);
  }

  return longestSequence;
};
