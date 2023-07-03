/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp = [...nums]
    for(let i = 0; i<temp.length;i++){
        let sub = (i+k)%temp.length
        nums[sub] = temp[i]
    }
};