var allPossiblePaths = function(matrix) {
    const m = matrix.length; // Number of rows
    const n = matrix[0].length; // Number of columns
    const paths = []; // Array to store all possible paths
    // Helper function for backtracking
    const backtrack = function(i, j, currentPath) {
        // Base case: If we reach the bottom-right cell, add the current path to the result
        if (i === m - 1 && j === n - 1) {
            paths.push([...currentPath, matrix[i][j]]);
            return;
        }
        // Move right
        if (j < n - 1) {
            backtrack(i, j + 1, [...currentPath, matrix[i][j]]);
        }
        // Move down
        if (i < m - 1) {
            backtrack(i + 1, j, [...currentPath, matrix[i][j]]);
        }
        currentPath.pop()
    };
    // Start backtracking from the top-left cell
    backtrack(0, 0, []);
    return paths;
};

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(JSON.stringify(allPossiblePaths(matrix)));