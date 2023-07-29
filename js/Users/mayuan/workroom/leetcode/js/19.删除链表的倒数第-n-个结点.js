/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let a = head
    let b = head
    for (let i = 0; i < n; i++) {
        b = b.next
    }
    if (!b) {
        return head.next
    }
    while (b.next !== null) {
        b = b.next
        a = a.next
    }
    a.next = a.next.next
    return head
};
// @lc code=end

