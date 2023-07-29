/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) {
        return strs[0]
    } else {
        let charCount = 1
        let result = ""
        while (true) {
            let pre = strs[0].substring(0, charCount)
            if (!pre) {
                return result
            }
            let strsTemp = strs.filter((strItem) => {
                return strItem.length >= charCount && strItem.startsWith(pre)
            })
            if (strsTemp.length !== strs.length) {
                return result
            }
            result = pre
            charCount++
        }
    }
};
// @lc code=end

