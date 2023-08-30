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

export const isBoardValid = (board) => {

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