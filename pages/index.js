import Head from "next/head";
import styles from "../styles/Home.module.css";
import { generateRandomBoard } from "../src/generateRandomBoard";
import { createBoard } from "../src/createZeroBoard";
import { useState } from "react";
import { solveSudoku } from "../src/solveSudoku";
import { isBoardValid } from "../src/isBoardValid";

const CreateJsxBoard = ({ board, setBoard }) => {
  const boardHtml = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j].isFrozen === false) {
        boardHtml.push(
          <li key={`${i}${j}`} className={styles.boardLi}>
            <input
              type="text"
              onChange={(event) => {
                const newBoard = JSON.parse(JSON.stringify(board));
                newBoard[i][j].value =
                  event.target.value[event.target.value.length - 1];
                setBoard(newBoard);
              }}
              className={styles.input}
              value={board[i][j].value === 0 ? "" : board[i][j].value}
            />
          </li>
        );
      } else {
        boardHtml.push(
          <li key={`${i}${j}`} className={styles.boardLi}>
            {board[i][j].value}
          </li>
        );
      }
    }
  }
  return (
    <div>
      <ul className={styles.boardUl}>{boardHtml}</ul>
    </div>
  );
};


const button = (board, correct, setCorrect, timer, setTimer) => {
  return (
    <>
      {correct === "Correct!" ? <h2 className = {styles.correct}>{correct}</h2> : <></>}
      {correct === "Incorrect" ? <h2 className = {styles.incorrect}>{correct}</h2> : <></>}
  
      <button
        className={styles.button}
        onClick={() => {
              
          const boardValid = isBoardValid(board);

          if (!boardValid) {
            setCorrect("Incorrect");
            return;
          }

          for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
              if (board[i][j].value === 0) {
                setCorrect("Incorrect");
                return;
              }
            }
          }
          setCorrect("Correct!");
          
        }}
      >
        Submit
      </button>
    </>
  );
};

const SolveButton = ({ board, setBoard, correct, setCorrect, setTimer }) => {
  return (
    <button
      className={styles.solveButton}
      type="button"
      onClick={() => {
        for (let i = 0; i<9; i++){
          for (let j=0; j<9; j++){
            if (board[i][j].isFrozen === false){
              board[i][j].value = 0 
            }
          }
        }
        const solvedBoard = solveSudoku(JSON.parse(JSON.stringify(board)));
        setBoard(JSON.parse(JSON.stringify(solvedBoard)));
        setCorrect("Correct!")
         
      }}
    >
      Solve for me
    </button>
  );
};

const generateButton = (setBoard, correct, setCorrect, timer, setTimer) => {
  
  return (
  
    
    <button
      className={styles.generateButton}
      type="button"
      onClick={() => {
        setBoard(generateRandomBoard(createBoard()));
        setCorrect(" ")
     
      }}
    >
      New Sudoku
    </button>
  );
};

export default function Home() {
  const [board, setBoard] = useState(generateRandomBoard(createBoard()));
  const [correct, setCorrect] = useState("unchecked");
  const [timer, setTimer] = useState(0);  
  const [running, setRunning] = useState(false)  
  return (
    <div className={styles.container}>
      <Head>
        <title>SUDOKU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Solve the Sudoku:</h1>
      <CreateJsxBoard board={board} setBoard={setBoard} />
      {button(board, correct, setCorrect, timer, setTimer)}
      {generateButton(setBoard, correct, setCorrect, timer, setTimer, running, setRunning)}
      <SolveButton board={board} setBoard={setBoard} correct = {correct} setCorrect = {setCorrect} setTimer = {setTimer} />
    </div>
  );
}
