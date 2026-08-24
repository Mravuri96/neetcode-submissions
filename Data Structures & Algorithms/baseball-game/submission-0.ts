class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    // Author Mravuri96
    calPoints(operations: string[]): number {
        let [i, arr] = [0, []];

        while (i < operations.length) {
            const op = operations[i];
            switch (op) {
                case "C":
                    arr.pop();
                    break;
                case "D":
                    arr.push(2 * arr[arr.length - 1]);
                    break;
                case "+":
                    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
                    break;
                default:
                    arr.push(Number(op));
            }
            i++;
        }

        return arr.reduce((a, b) => a + b, 0);
    }
}
