/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const MAP = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }
    let result = []
    const combine = (array, charArray) => {
        let newArray = []
        for (let i = 0; i < charArray.length; i++) {
            for (let j = 0; j < array.length; j++) {
                newArray.push(array[j] + charArray[i])
            }
        }
        return newArray
    }
    for (let i = 0; i < digits.length; i++) {
        let charArray = MAP[digits[i]]
        if (result.length) {
            result = combine(result, charArray)
        } else {
            result = result.concat(charArray)
        }
    }

    return result
};
// @lc code=end

