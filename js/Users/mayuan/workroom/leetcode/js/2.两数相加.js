/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode(0)
    let resultNext = result
    let up = 0
    while (l1 !== null || l2 !== null || up !== 0) {
        let sum = 0
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        sum += up
        up = sum >= 10 ? 1 : 0
        resultNext.next = new ListNode(sum % 10)
        resultNext = resultNext.next
    }

    return result.next
};
// @lc code=end

