/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const result = (x) => {
        let result = 0
        while (x) {
            result = result * 10 + x % 10
            x = Math.floor(x / 10)
        }
        return result
    }
    return x >= 0 && (x < 10 || (result(x) === x))
};
// @lc code=end

