/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const MAP = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    }
    let result = []
    while (num) {
        result.unshift(num % 10)
        num = parseInt(num / 10)
    }
    for (let i = 0; i < result.length; i++) {
        let temp = result[i]
        let place = Math.pow(10, result.length - i - 1)
        let number = ""
        if (temp !== 0) {
            if (temp < 4) {
                number = MAP[place]
                for (let j = 1; j < temp; j++) {
                    number = number + MAP[place]
                }
            } else if (temp === 4) {
                number = MAP[place] + MAP[place * 5]
            } else if (temp === 5) {
                number = MAP[place * 5]
            } else if (temp < 9) {
                number = MAP[place * 5]
                for (let j = 5; j < temp; j++) {
                    number = number + MAP[place]
                }
            } else if (temp === 9) {
                number = MAP[place] + MAP[place * 10]
            }
            result[i] = number
        } else {
            result[i] = ""
        }
    }

    return result.join("")
};
// @lc code=end

