import { lockNumbers } from "./lockNumbers"
import { solveSudoku } from "./solveSudoku"


export const generateRandomBoard = (board) => {

    const fillDiagonalBoxes = (board) => {

        // randomly fill the 3x3 diagonal boxes - can defo make this into one function:

        const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const randomArray1 = array1.sort((a, b) => 0.5 - Math.random());
        const randomArray2 = array2.sort((a, b) => 0.5 - Math.random());
        const randomArray3 = array3.sort((a, b) => 0.5 - Math.random());

        let n = 0

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                board[i][j] = randomArray1[n]
                n += 1
            }
        }

        n = 0

        for (let i = 3; i < 6; i++) {
            for (let j = 3; j < 6; j++) {
                board[i][j] = randomArray2[n]
                n += 1
            }
        }

        n = 0

        for (let i = 6; i < 9; i++) {
            for (let j = 6; j < 9; j++) {
                board[i][j] = randomArray3[n]
                n += 1
            }
        }

    };


    fillDiagonalBoxes(board)

    lockNumbers(board)

    solveSudoku(board)

    // Function to remove elements to create a sudoku board

    const removeElements = (board) => {

        let n = 1

        while (n < 46) {

            let i = Math.floor(Math.random() * 9)
            let j = Math.floor(Math.random() * 9)

            board[i][j].value = 0
            n++
        }

        for (let i = 0; i<9; i++) {

            for (let j=0; j<9; j++){

                if (board[i][j].value === 0) {
                    board[i][j].isFrozen = false
                }
                else {
                    board[i][j].isFrozen = true
                }
            } 

        }

    }

    

    removeElements(board)

    return board

}