const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({ handleSelectSquare, turns }) {

    const newBoard = initialGameBoard

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, cell } = square;
        newBoard[row][cell] = player;
    }

    return (
        <ol id="game-board">
            {newBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, cellIndex) => (
                            <li key={cellIndex}>
                                <button className="board-cell"
                                    onClick={() => handleSelectSquare(rowIndex, cellIndex)}
                                >
                                    {cell}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>))}
        </ol>
    )


}