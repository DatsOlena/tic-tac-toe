import Player from './components/Player';
import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './winning-combination';


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const activePlayer = deriveActivePlayer(gameTurns);


  const gameBoard = [...initialGameBoard.map(array => [...array])]

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, cell } = square;
    gameBoard[row][cell] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, cellIndex) {

    const currentPlayer = deriveActivePlayer(gameTurns);

    setGameTurns(prevTurns => {
      const updatedTurns =
        [{ square: { row: rowIndex, cell: cellIndex }, player: currentPlayer }, ...prevTurns]
      console.log(updatedTurns);

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  console.log("Turns:", gameTurns, "Board:", gameBoard)

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <Player initialName="Player 1" isActive={activePlayer === "X"} symbol="X" onNameChange={handlePlayerNameChange} />
          </li>
          <li>
            <Player initialName="Player 2" isActive={activePlayer === "O"} symbol="O" onNameChange={handlePlayerNameChange} />
          </li>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard handleSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main >
  )
}

export default App
