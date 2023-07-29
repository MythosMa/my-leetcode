/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let result = []
    if (nums.length < 4) {
        return []
    } else if (nums.length === 4) {
        if (nums[0] + nums[1] + nums[2] + nums[3] === target) {
            return [nums]
        } else {
            return []
        }
    }

    nums.sort((a, b) => {
        return a - b
    })

    let a = 0
    let b = nums.length - 1

    while (a < b - 2) {
        let c = a + 1
        let d = b - 1

        while (c < d) {
            let sum = nums[a] + nums[b] + nums[c] + nums[d]
            if (sum === target) {
                result.push([nums[a], nums[c], nums[d], nums[b]])

                if (c !== d - 1 || d !== b - 1) {
                    let currentD = nums[d]
                    while (currentD === nums[--d]) { }
                    if (d <= c) {
                        let currentB = nums[b]
                        while (currentB === nums[--b]) { }
                    }
                } else {
                    let currentC = nums[c]
                    while (currentC === nums[++c]) { }
                    if (d <= c) {
                        let currentA = nums[a]
                        while (currentA === nums[++a]) { }
                        b = nums.length - 1
                    }
                }
            } else if (sum > target) {
                let currentD = nums[d]
                while (currentD === nums[--d]) { }
                if (d <= c) {
                    let currentB = nums[b]
                    while (currentB === nums[--b]) { }
                    c = a + 1
                    d = b - 1
                }
            } else {
                let currentC = nums[c]
                while (currentC === nums[++c]) { }
                d = b - 1
                if (c >= d) {
                    let currentA = nums[a]
                    while (currentA === nums[++a]) { }
                    c = a + 1
                    b = nums.length - 1
                    d = b - 1
                }
            }
        }
    }

    return result
};
// @lc code=end

