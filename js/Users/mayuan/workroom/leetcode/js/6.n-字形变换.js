/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let sLength = s.length
    let perLoopColumnCount = (numRows - 1 === 0) ? 1 : numRows - 1
    let perLoopCharCount = numRows + perLoopColumnCount - 1
    let maxColumnCount = sLength / perLoopCharCount * perLoopColumnCount
    let result = ""
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < maxColumnCount; j++) {
            let index = -1
            if (j % perLoopColumnCount === 0) {
                index = Math.floor(j / perLoopColumnCount) * perLoopCharCount + i
            } else if (i === (perLoopColumnCount - (j % perLoopColumnCount))) {
                index = Math.floor(j / perLoopColumnCount) * perLoopCharCount + numRows + j % perLoopColumnCount - 1
            }
            if (index >= 0) {
                result += s.charAt(index)
            }
            if (result.length === sLength) {
                return result
            }
        }
    }
    return result
};
// @lc code=end

