/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let dic = []
    let maxLength = 0
    let startIndex = 0
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        let index = dic.indexOf(char, startIndex)
        if (index !== -1) {
            startIndex = index + 1
        }
        dic.push(char)
        let tempLength = i - startIndex + 1
        maxLength = tempLength > maxLength ? tempLength : maxLength
    }

    return maxLength
};
// @lc code=end

