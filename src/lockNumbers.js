//Function to lock the starting numbers in the sudoku

export const lockNumbers = (board) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != 0) {
                board[i][j] = { value: board[i][j], isFrozen: true }
            }
            else {
                board[i][j] = { value: board[i][j], isFrozen: false }
            }
        }
    }
    return board
}