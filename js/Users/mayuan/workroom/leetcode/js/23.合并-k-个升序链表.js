/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const mergeTwoLists = (list1, list2) => {
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
    }
    if (lists.length) {
        let result = lists[0]
        for (let i = 1; i < lists.length; i++) {
            result = mergeTwoLists(result, lists[i])
        }
        return result
    }
    return null
};
// @lc code=end

