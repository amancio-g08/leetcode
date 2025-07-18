Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return [];
    const result = Array(rowsCount).fill().map(() => Array(colsCount));
    let index = 0;
    for (let col = 0; col < colsCount; col++) {
        const start = col % 2 === 0 ? 0 : rowsCount - 1;
        const end = col % 2 === 0 ? rowsCount : -1;
        const step = col % 2 === 0 ? 1 : -1;
        for (let row = start; col % 2 === 0 ? row < end : row > end; row += step) {
            result[row][col] = this[index++];
        }
    }
    return result;
}; 