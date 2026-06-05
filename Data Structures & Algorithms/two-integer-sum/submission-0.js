class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const notebook = new Map();
        for (let i =0 ; i<nums.length;i++){
            const currentNum = nums[i];
            const requiredNum = target - currentNum;
        

        if(notebook.has(requiredNum)){
            return[notebook.get(requiredNum),i];
        }
        notebook.set(currentNum, i);
    }
        return [];
    }
   
}
