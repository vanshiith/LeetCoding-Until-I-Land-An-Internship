/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    j = 0
    nums.forEach((num) => {
        if(num!=val){
            nums[j++] = num
        }
    })
    return j //2 pointer O(n)
};