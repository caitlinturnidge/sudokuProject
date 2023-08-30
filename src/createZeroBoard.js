//function that creates a 9x9 board filled with zeros

export const createBoard = () => {

    let sudokuBoard = [];

    for (let i = 0; i < 9; i++) {
        sudokuBoard[i] = [];
        for (let j = 0; j < 9; j++) {
            sudokuBoard[i][j] = 0;
        }
    }
    return sudokuBoard
}