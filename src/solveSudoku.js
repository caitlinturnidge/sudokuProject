import {isBoardValid} from "./isBoardValid"

//Function to solve a sudoku / backtracking algorithm

export const solveSudoku = (board) => {
    let i = 0
    let j = 0
    let backtracking = false


    while (true) {

        if (j === 9) {
            console.log("Filled in Sudoku Board: ")
            break
        }

        // printBoard(board);
        if (board[i][j].isFrozen === true) {

            if (backtracking === true) {

                if (i === 0) {
                    i = 8
                    j -= 1
                }

                else {
                    i -= 1
                }
                continue

            }

            if (i === 8) {
                i = 0
                j += 1
            }

            else {
                i += 1
            }
            continue
        }

        backtracking = false

        board[i][j].value += 1

        while (isBoardValid(board) === false || board[i][j].value > 9) {

            // printBoard(board);
            board[i][j].value += 1

            if (board[i][j].value > 9) {

                backtracking = true

                board[i][j].value = 0

                if (i === 0) {
                    i = 8
                    j -= 1
                }

                else {
                    i -= 1
                }
            }
        }


        if (backtracking === false) {
            if (i === 8) {
                i = 0
                j += 1
            }

            else {
                i += 1
            }
        }
    }

    return board
}
