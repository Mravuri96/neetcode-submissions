class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // Author Mravuri96
    searchInsert(nums: number[], target: number): number {
        let [start, end] = [0, nums.length - 1];
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return start;
    }
}
