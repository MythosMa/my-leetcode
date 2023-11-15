/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = (-2) ** 31;
  
    if (dividend === INT_MAX&& divisor === 1) {
      return INT_MAX;
    }
    if (dividend === INT_MIN && divisor === 1) {
      return INT_MIN;
    }
    if (dividend === INT_MAX && divisor === -1) {
      return INT_MIN;
    }
    if (dividend === INT_MIN && divisor === -1) {
      return INT_MAX;
    }
  
    const sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
  
    let quotient = 0;
    while (dividend >= divisor) {
      let tempDivisor = divisor;
      let multiple = 1;
  
      while (dividend >= (tempDivisor << 1)) {
        tempDivisor <<= 1;
        multiple <<= 1;
      }
  
      dividend -= tempDivisor;
      quotient += multiple;
    }
  
    return sign === -1 ? -quotient : quotient;
};
// @lc code=end

