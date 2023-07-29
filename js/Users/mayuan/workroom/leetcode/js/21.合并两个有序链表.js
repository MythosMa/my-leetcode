/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let result = new ListNode(0)
    let resultNext = result
    while (list1 !== null || list2 !== null) {
        if (list1 && list2) {
            if (list1.val < list2.val) {
                resultNext.next = new ListNode(list1.val)
                list1 = list1.next
            } else {
                resultNext.next = new ListNode(list2.val)
                list2 = list2.next
            }
        } else if (list1) {
            resultNext.next = new ListNode(list1.val)
            list1 = list1.next
        } else if (list2) {
            resultNext.next = new ListNode(list2.val)
            list2 = list2.next
        }
        resultNext = resultNext.next
    }
    return result.next
};
// @lc code=end

