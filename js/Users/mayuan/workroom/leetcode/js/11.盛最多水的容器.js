/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let result = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        let h = Math.min(height[left], height[right])
        result = Math.max(result, h * (right - left))
        while (left < right && height[left] <= h) {
            left++
        }
        while (left < right && height[right] <= h) {
            right--
        }
    }

    return result
};
// @lc code=end

