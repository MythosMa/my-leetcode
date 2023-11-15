/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length) {
    let sameCount = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        nums[i] = -1;
        sameCount++;
      }
    }
    nums.sort((a, b) => {
      return b - a;
    });
    return nums.length - sameCount;
  }
  return 0;
};
// @lc code=end
