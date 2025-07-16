import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";



function Grid() {

    // const squares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    const squares = Array(16).fill(false);

    const [grid, setGrid] = useState(squares);


    // create another copy of the original array [squares], 
    // switch between true and false for each individual square,
    // Update the state with the new array
    function handleClick(index) {
        const newGrid = [...grid];
        newGrid[index] = !newGrid[index];
        setGrid(newGrid);
        console.log(newGrid);
    }

    // save the state to local storage
    function saveGrid() {
        localStorage.setItem("grid", JSON.stringify(grid)); // we dont necessarilty need to stringify since we are working with a boolean
    }

    //Clear all the states
    function clearGrid() {
        const newGrid = Array(16).fill(false);
        setGrid(newGrid);
    }

    // another option for clearing the grid
    function clearGrid1() {
        const newGrid = squares;
        setGrid(newGrid);
    }
    // load the state from local storage
    function loadGrid() { //Get the saved grid from local storage, if it exists convert it to real JS array.
        const savedGrid = localStorage.getItem("grid");
        if (savedGrid) {
            setGrid(JSON.parse(savedGrid));
        } else {
            alert("No saved grid found");
        }
    }









    return (
        <>
            <h1>GRID</h1>
            <br />
            <div className="grid grid-cols-4 gap-2">

                {/* using a mao to loop through all the 16 states */}
                {grid.map((active, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`w-20 h-20 cursor-pointer rounded transition-all duration-200 ${active ? "bg-blue-400" : "bg-gray-300"
                                }`}
                        ></div>
                    )
                })}

                {/* <div onClick={() => handleClick(0)} className="bg-blue-100 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(1)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(2)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(3)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(4)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(5)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(6)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(7)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(8)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(9)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(10)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(11)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(12)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(13)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(14)} className="bg-blue-300 p-5 w-30 h-30"></div>
                <div onClick={() => handleClick(15)} className="bg-blue-300 p-5 w-30 h-30"></div> */}
            </div>

            <br />
            <div className="flex w-max gap-4">
                <Button onClick={() => saveGrid()} >Save</Button>
                <Button onClick={() => clearGrid()} >Clear</Button>
                <Button onClick={() => loadGrid()} >Load</Button>
            </div>

        </>
    )
}


export default Grid;