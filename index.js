// 使用百度云文档里介绍的这个算法：
// https://cloud.baidu.com/doc/SPEECH/ASR-Tool/3F.5C.E6.8B.BC.E9.9F.B3.E7.9B.B8.E4.BC.BC.E5.BA.A6.E6.AF.94.E8.BE.83.html

function getEditDistance(s, t) {

    // Step 1
    const n = s.length;
    const m = t.length;
    if (n == 0) {
        return m;
    }
    if (m == 0) {
        return n;
    }
    const d = new Array(n+1);
    for (let i=0; i<n+1; i++){
        d[i] = new Array(m+1)
    }

    // Step 2
    for (let i = 0; i <= n; i++) {
        d[i][0] = i;
    }
    for (let j = 0; j <= m; j++) {
        d[0][j] = j;
    }

    // Step 3
    for (let i = 1; i <= n; i++) {
        const s_i = s.charAt(i - 1);
        // Step 4
        for (let j = 1; j <= m; j++) {
            const t_j = t.charAt(j - 1);
            // Step 5
            const cost = (s_i == t_j) ? 0 : 1;
            // Step 6
            d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1,
                d[i - 1][j - 1] + cost);
        }
    }
    // Step 7
    return d[n][m];
}

module.exports = getEditDistance