import { useState } from "react";
import { Button } from "@material-tailwind/react";



function Grid() {
    const [grid, setGrid] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

    const handleClick = (index) => {
        const newGrid = [...grid];
        newGrid[index] = !newGrid[index];
        setGrid(newGrid);
        console.log(newGrid);
    };







    return (
        <>
            <h1>GRID</h1>
            <br />
            <div className="grid grid-cols-4 gap-2">

                {grid.map((active, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`w-20 h-20 cursor-pointer rounded transition-all duration-200 ${active ? "bg-blue-400" : "bg-gray-300"
                            }`}
                    ></div>
                ))}

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
                <Button variant="filled">Save</Button>
                <Button variant="gradient">Clear</Button>
                <Button variant="outlined">Load</Button>
            </div>

        </>
    )
}


export default Grid;