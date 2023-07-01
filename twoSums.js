/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumArray = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }

    }
    return []
};


var twoSumHash = function(nums, target) {
    let map = new Map();
    for(let i = 0; i<nums.length; i++){
        let difference = target - nums[i];
        if(map.has(difference)){
            return [i, map.get(difference)]
        }
        map.set(nums[i], i);
    }
    return []
};