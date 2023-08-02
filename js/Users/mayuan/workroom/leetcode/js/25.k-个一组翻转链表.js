/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const reserve = (head, end) => {
        let pre = end.next
        let current = head
        while (pre !== end) {
            let next = current.next
            current.next = pre
            pre = current
            current = next
        }
        return { head: end, end: head }
    }
    let start = new ListNode(0)
    start.next = head
    let preTemp = start
    while (head) {
        let end = preTemp
        for (let i = 0; i < k; i++) {
            end = end.next
            if (!end) {
                return start.next
            }
        }
        let nextGroup = end.next
        let rseult = reserve(head, end)
        head = rseult.head
        end = rseult.end
        preTemp.next = head
        end.next = nextGroup
        preTemp = end
        head = end.next
    }
    return start.next
};
// @lc code=end

