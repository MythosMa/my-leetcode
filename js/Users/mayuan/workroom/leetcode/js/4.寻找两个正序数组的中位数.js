/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const findValueOnK = (array1, index1, array2, index2, k) => {
        if (index1 >= array1.length) {
            return array2[index2 + k - 1]
        }
        if (index2 >= array2.length) {
            return array1[index1 + k - 1]
        }
        if (k === 1) {
            return Math.min(array1[index1], array2[index2])
        }
        let midValue1 = index1 + parseInt(k / 2) - 1 < array1.length ? array1[index1 + parseInt(k / 2) - 1] : 10000000
        let midValue2 = index2 + parseInt(k / 2) - 1 < array2.length ? array2[index2 + parseInt(k / 2) - 1] : 10000000
        if (midValue1 < midValue2) {
            return findValueOnK(array1, index1 + parseInt(k / 2), array2, index2, k - parseInt(k / 2))
        } else {
            return findValueOnK(array1, index1, array2, index2 + parseInt(k / 2), k - parseInt(k / 2))
        }
    }
    let m = nums1.length
    let n = nums2.length
    let left = parseInt((m + n + 1) / 2)
    let right = parseInt((m + n + 2) / 2)
    return (findValueOnK(nums1, 0, nums2, 0, left) + findValueOnK(nums1, 0, nums2, 0, right)) / 2
};
// @lc code=end

