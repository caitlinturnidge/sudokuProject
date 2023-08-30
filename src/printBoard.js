//Function to print the board in the console

export const printBoard = (board) => {
    let printedBoard = ''
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            printedBoard += board[i][j].value
            printedBoard += ' '
        }
        printedBoard += '\n'
    }
    console.log(printedBoard)
}
