/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let startIndex = 0
    let endIndex = s.length - 1
    let longString = ""
    while ((s.length - startIndex) > longString.length) {
        const checkIsPalindromic = (startIndex, endIndex) => {
            let i = startIndex
            let j = endIndex
            while (i < j || (j - i > longString.length)) {
                if (s.charAt(i++) !== s.charAt(j--)) {
                    return false
                }
            }
            return true
        }
        if (checkIsPalindromic(startIndex, endIndex)) {
            longString = longString.length >= (endIndex - startIndex + 1) ? longString : s.substring(startIndex, endIndex + 1)
        }
        if (startIndex > --endIndex) {
            startIndex++
            endIndex = s.length - 1
        }
    }

    return longString
};
// @lc code=end

