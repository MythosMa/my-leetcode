/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const n = s.length, m = p.length
    function dfs(i, j) {
        if (i === n && j === m) return true
        if (i > n || j >= m) return false
        const isSame = p[j] === '.' || s[i] === p[j]
        if (p[j + 1] === '*') return isSame && dfs(i + 1, j) || dfs(i, j + 2)
        return isSame && dfs(i + 1, j + 1)
    }
    return dfs(0, 0)
};
// @lc code=end

