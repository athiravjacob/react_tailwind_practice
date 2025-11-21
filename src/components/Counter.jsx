import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(0)

    function increment(){
        setCount((prev)=> prev+1)
    }
    function decrement(){
        setCount((prev)=>prev>0 ? prev-1 :0)
    }
    function reset(){
        setCount(0)
    }

    return(
        <>
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-2xl text-center shadow-xl">
                <h1 className="text-2xl font-bold text-gray-800">Counter App</h1>
                <p className="text-3xl font-extrabold">{count}</p>
                <div className="flex gap-4 mt-16">
                <button className="px-4 py-2 bg-blue-900 text-white rounded text-xl hover:bg-blue-400" onClick={increment}>+</button>
                <button className="px-4 py-2 text-xl rounded bg-blue-900 hover:bg-blue-400 text-white" onClick={decrement}>-</button>
                <button className="px-4 py-2 text-xl rounded bg-blue-900 hover:bg-blue-400 text-white" onClick={reset}>Reset</button>

            </div>



            </div>

        </div>
            
        </>
    )
}