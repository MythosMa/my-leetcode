/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const makeResult = (n, str, array, left, right) => {
        if (left === n && right === n) {
            array.push(str)
            return
        }
        if (left < n) {
            makeResult(n, str + "(", array, left + 1, right)
        }
        if (right < left) {
            makeResult(n, str + ")", array, left, right + 1)
        }
    }
    let array = []
    let str = ""
    makeResult(n, str, array, 0, 0)
    return array
};
// @lc code=end

