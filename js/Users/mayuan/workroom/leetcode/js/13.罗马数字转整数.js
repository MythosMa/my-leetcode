/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const MAP = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    const getPlace = (number) => {
        let n = 0
        do {
            n++
            num /= 10
        } while (num)

        return n
    }

    let result = MAP[s[0]]
    for (let i = 1; i < s.length; i++) {
        let before = MAP[s[i - 1]]
        let current = MAP[s[i]]
        if (before < current) {
            result += current - before * 2
        } else {
            result += current
        }
    }
    return result
};
// @lc code=end

