/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let charArray = []
    let map = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            charArray.push(s[i])
        }
        if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
            if (map[charArray[charArray.length - 1]] === s[i]) {
                charArray.pop()
            } else {
                return false
            }
        }

    }
    return charArray.length === 0
};
// @lc code=end

