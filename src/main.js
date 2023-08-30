
//function that creates a 9x9 board 

const createBoard = () => {

    let sudokuBoard = [];

    for (let i = 0; i < 9; i++) {
        sudokuBoard[i] = [];
        for (let j = 0; j < 9; j++) {
            sudokuBoard[i][j] = 0;
        }
    }
    return sudokuBoard
}

const board = createBoard()

//Create an algorithm that generates random sudoku boards that we can solve

//Facts - there must be more than 17 starting numbers

board[0][1] = 2
board[0][8] = 5
board[1][0] = 6
board[1][4] = 9
board[1][5] = 7
board[1][7] = 4
board[2][0] = 4
board[2][1] = 1
board[2][3] = 2
board[2][5] = 8
board[3][1] = 7
board[3][2] = 8
board[3][8] = 1
board[4][1] = 3
board[4][2] = 9
board[4][3] = 6
board[4][5] = 2
board[4][6] = 4
board[4][7] = 5
board[4][8] = 7
board[5][1] = 4
board[5][2] = 6
board[5][3] = 1
board[5][4] = 7
board[5][5] = 3
board[5][6] = 2
board[5][7] = 8
board[6][0] = 7
board[6][3] = 9
board[7][1] = 6
board[7][6] = 9
board[7][7] = 2
board[8][4] = 2
board[8][5] = 1
board[8][6] = 5
board[8][8] = 6

//Function to lock the starting numbers in the sudoku

const lockNumbers = (board) => {
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

lockNumbers(board)

//Function to print the board in the console

const printBoard = (board) => {
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

printBoard(board)

//Function to check if an array has all different numbers in it

const checkArrays = (array) => {
    const set = new Set();
    for (let i = 0; i < 9; i++) {
        if (set.has(array[i]) && array[i] !== 0) {
            return false
        }
        else {
            set.add(array[i])
        }
    }
    return true
}

//Function to get the 3x3 square elements into an array by providing two coodinates

const getSquareElements = (icood1, jcood1, icood2, jcood2, board) => {
    const array = []
    for (let i = icood1; i < icood2 + 1; i++) {
        for (let j = jcood1; j < jcood2 + 1; j++) {
            array.push(board[i][j].value)
        }
    }
    return array
}

//Function to check if the board is valid

const isBoardValid = (board) => {

    //checking the rows
    for (let i = 0; i < 9; i++) {
        const rowArray = []
        for (let j = 0; j < 9; j++) {
            rowArray.push(board[i][j].value)
        }

        if (checkArrays(rowArray) !== true) {
            return false
        }
    }

    //checking the columns
    for (let i = 0; i < 9; i++) {
        const rowArray = []
        for (let j = 0; j < 9; j++) {
            rowArray.push(board[j][i].value)
        }

        if (checkArrays(rowArray) !== true) {
            return false
        }
    }

    //checking the squares

    if (checkArrays(getSquareElements(0, 0, 2, 2, board)) !== true) {
        return false
    }
    if (checkArrays(getSquareElements(3, 0, 5, 2, board)) !== true) {
        return false
    }
    if (checkArrays(getSquareElements(6, 0, 8, 2, board)) !== true) {
        return false
    }
    if (checkArrays(getSquareElements(0, 3, 2, 5, board)) !== true) {
        return false
    }
    if (checkArrays(getSquareElements(0, 6, 2, 8, board)) !== true) {
        return false
    }
    if (checkArrays(getSquareElements(3, 3, 5, 5, board)) !== true) {
        return false
    }
    if (checkArrays(getSquareElements(6, 6, 8, 8, board)) !== true) {
        return false
    }

    if (checkArrays(getSquareElements(3, 6, 5, 8, board)) !== true) {
        return false
    }
    if (checkArrays(getSquareElements(6, 3, 8, 5, board)) !== true) {
        return false
    }

    return true
}



//Function to solve a sudoku / backtracking algorithm

const solveSudoku = (board) => {
    let i = 0
    let j = 0
    let backtracking = false


    while (true) {

        if (j === 9) {
            console.log("Solved Sudoku: ")
            printBoard(board)
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
}


solveSudoku(board);












