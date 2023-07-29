/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
    if (nums.length < 3) {
        return []
    } else if (nums.length === 3) {
        if (nums[0] + nums[1] + nums[2] === 0) {
            return [nums]
        } else {
            return []
        }
    }

    nums.sort((a, b) => {
        return a - b
    })

    let i = 0
    let j = nums.length - 1
    let k = i + 1
    let left = nums[i]
    let right = nums[j]
    if (left > 0 || right < 0) {
        return result
    }

    while (k < j) {
        if (left + right + nums[k] < 0) {
            k++
            if (k === j) {
                while (left === nums[++i]) {
                    if (i >= j) {
                        return result
                    }
                }
                left = nums[i]
                j = nums.length - 1
                right = nums[j]
                k = i + 1
            }
        } else {
            if (left + right + nums[k] === 0) {
                result.push([left, nums[k], right])
            }
            while (right === nums[--j]) {
                if (i >= j) {
                    return result
                }
            }
            right = nums[j]
            k = i + 1
        }
    }

    return result
};
// @lc code=end

