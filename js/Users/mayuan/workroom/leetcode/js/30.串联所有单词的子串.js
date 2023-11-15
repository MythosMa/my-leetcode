/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const result = [];
    if (!words.length || !s.length) return result;
    const wordLen = words[0].length;
    const totalLen = wordLen * words.length;
  
    const wordCount = new Map();
    words.forEach(word => {
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
    });
  
    for (let i = 0; i < wordLen; i++) {
      let left = i;
      let count = 0;
      const currentCount = new Map();
  
      for (let j = i; j <= s.length - wordLen; j += wordLen) {
        const word = s.slice(j, j + wordLen);
  
        if (wordCount.has(word)) {
          currentCount.set(word, (currentCount.get(word) || 0) + 1);
          count++;
  
          while (currentCount.get(word) > wordCount.get(word)) {
            const leftWord = s.slice(left, left + wordLen);
            currentCount.set(leftWord, currentCount.get(leftWord) - 1);
            count--;
            left += wordLen;
          }
  
          if (count === words.length) {
            result.push(left);
            const leftWord = s.slice(left, left + wordLen);
            currentCount.set(leftWord, currentCount.get(leftWord) - 1);
            count--;
            left += wordLen;
          }
        } else {
          currentCount.clear();
          count = 0;
          left = j + wordLen;
        }
      }
    }
  
    return result;
};
// @lc code=end

