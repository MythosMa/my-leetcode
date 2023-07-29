/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let result = []
    let isStart = false
    s = s.trim()
    for (let i = 0; i < s.length; i++) {
        let tempChar = s[i]
        if (!isStart) {
            if (!Number.isNaN(parseInt(tempChar)) || tempChar === "-" || tempChar === "+") {
                isStart = true
                if (tempChar === "-" || tempChar === "+") {
                    tempChar += "0"
                }
                result.push(tempChar)
            } else {
                return 0
            }
        } else {
            if (Number.isNaN(parseInt(tempChar))) {
                break
            } else {
                result.push(tempChar)
            }
        }
    }
    result = parseInt(result.join(""))
    if (result > Math.pow(2, 31) - 1) {
        result = Math.pow(2, 31) - 1
    }
    if (result < Math.pow(2, 31) * -1) {
        result = Math.pow(2, 31) * -1
    }
    return result ? result : 0
};
// @lc code=end

