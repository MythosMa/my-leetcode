/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let result = 0
    if (nums.length === 3) {
        return nums[0] + nums[1] + nums[2]
    }

    nums.sort((a, b) => {
        return a - b
    })

    let i = 0
    let j = nums.length - 1
    let k = i + 1
    let left = nums[i]
    let right = nums[j]
    let distance = 99999999
    let lastDistance = 99999999
    let lastResult = 0

    while (i < j - 1) {
        let currentDis = Math.abs(left + right + nums[k] - target)

        if (currentDis <= lastDistance) {
            lastResult = left + right + nums[k++]
            lastDistance = currentDis

            if (k >= j && i < j - 2) {
                if (lastDistance < distance) {
                    distance = lastDistance
                    result = lastResult
                }
                lastDistance = 99999999
                lastResult = 0
                while (right === nums[--j]) { }
                right = nums[j]
                k = i + 1
            }
        } else {
            if (lastDistance < distance) {
                distance = lastDistance
                result = lastResult
            }
            lastDistance = 99999999
            lastResult = 0
            while (right === nums[--j]) { }
            right = nums[j]
            k = i + 1
        }

        if (k >= j) {
            if (lastDistance < distance) {
                distance = lastDistance
                result = lastResult
            }
            lastDistance = 99999999
            lastResult = 0
            while (left === nums[++i]) { }
            left = nums[i]
            j = nums.length - 1
            right = nums[j]
            k = i + 1
        }
    }

    if (lastDistance < distance) {
        distance = lastDistance
        result = lastResult
    }
    return result
};
// @lc code=end

