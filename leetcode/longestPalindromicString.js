var longestPalindrome = function(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => new Array(n).fill(false));
    let result = '';
    console.log(JSON.stringify(dp))
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1]);
            if (dp[i][j] && j - i + 1 > result.length) {
                result = s.substring(i, j + 1);
            }
        }
    }
    console.table(dp)
    console.log(result)
};

let s = "babad"
longestPalindrome(s)