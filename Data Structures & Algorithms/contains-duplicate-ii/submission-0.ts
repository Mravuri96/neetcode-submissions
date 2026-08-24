class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        let [i, seen] = [0, new Set()];

        while (i < nums.length) {
            const el = nums[i];
            if (seen.has(el)) return true;
            seen.add(el);
            if (i >= k) seen.delete(nums[i - k]);
            i++;
        }

        return false;
    }
}
