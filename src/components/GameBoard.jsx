
export default function GameBoard({ handleSelectSquare, board }) {

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, cellIndex) => (
                            <li key={cellIndex}>
                                <button className="board-cell"
                                    onClick={() => handleSelectSquare(rowIndex, cellIndex)}
                                    disabled={cell} // If cell is not null, disable the button
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