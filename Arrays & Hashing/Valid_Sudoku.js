const isValidSudoku = (board) => {
  const rows = Array(9)
    .fill(0)
    .map(() => new Set());
  const columns = Array(9)
    .fill(0)
    .map(() => new Set());
  const boxes = Array(9)
    .fill(0)
    .map(() => new Set());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = board[row][col];
      if (cell !== ".") {
        const boxIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3);

        if (
          rows[row].has(cell) ||
          columns[col].has(cell) ||
          boxes[boxIdx].has(cell)
        ) {
          return false;
        }

        rows[row].add(cell);
        columns[col].add(cell);
        boxes[boxIdx].add(cell);
      }
    }
  }

  return true;
};
