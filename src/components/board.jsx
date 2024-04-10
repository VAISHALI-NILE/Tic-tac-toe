import React,{useState} from "react";
import Square from "./square";
function Board(){
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn , setXturn] = useState(true);

    function checkWinner()
    {
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];


        for(let l of winnerLogic)
        {
            const [a,b,c] = l;
            if(state[a] !== null && state[a]===state[b] && state[b] === state[c])
            {
                return state[a];
            }
        }
    }
    const isWinner = checkWinner();
    function handleClick(index)
    {
        if(state[index] !== null)
        {
            return;
        }
        const cpState = [...state];
        cpState[index] = isXTurn ? "X" : "O";
        setState(cpState);
        setXturn(!isXTurn);
    }

    return( 
        <div className="board-container">
            {isWinner ? (<><h1>{isWinner} WON THE GAME</h1> 
                            <button className="play-again" onClick={()=>                                 
                                {
                                    setState(Array(9).fill(null));
                                }
                            }>Play Again</button>  </> 
                        ) :
            ( <>
            <h3>Player {isXTurn ? "X" : "O"} please make your move:</h3>
            <div className="sub-container">
            <div className="board-row">
                <Square onClick={()=>{handleClick(0)}} value={state[0]}/>
                <Square onClick={()=>{handleClick(1)}} value={state[1]} />
                <Square onClick={()=>{handleClick(2)}} value={state[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>{handleClick(3)}} value={state[3]} />
                <Square onClick={()=>{handleClick(4)}} value={state[4]}/>
                <Square onClick={()=>{handleClick(5)}} value={state[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>{handleClick(6)}} value={state[6]}/>
                <Square onClick={()=>{handleClick(7)}} value={state[7]}/>
                <Square onClick={()=>{handleClick(8)}} value={state[8]}/>
            </div>
            </div>
            </>
            )}
        </div>
    );
}

export default Board;