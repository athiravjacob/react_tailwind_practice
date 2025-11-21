import { useState } from "react";

  export default function Todo(){
    const [todoList,setTodoList] = useState([])
    const [task,setTask]= useState('')
    function addTodo(){
        if(task.trim() === "") return
        setTodoList([...todoList,task])
        setTask('')
    }

    function RemoveTask(index){
        setTodoList(todoList.filter((_,i)=>i !==index))
    }

    return(
        <>
        <div className="h-screen flex items-center justify-center bg-amber-100">
            <div className="bg-white rounded-2xl w-full max-w-md  shadow-2xl">
                <h1 className="text-3xl text-center font-extrabold p-5">Todo App</h1>
                <div className="p-6  mb-4">
                    <input className="m-2 px-4 py-3 bg-gray-100 outline-none text-xl hover:bg-blue-200 text-black "
                        value={task}
                        onChange={(e)=>setTask(e.target.value)}
                    ></input>
                    <button onClick={addTodo} className="px-3 py-3 bg-blue-700 hover:bg-blue-100 hover:text-black text-indigo-100 "> Add Task</button>
                    <ul className="space-y-2">
                        {todoList.map((item,index)=>(
                            <li key={index} className="flex justify-between items-center">
                                {item}
                                <button onClick={()=>RemoveTask(index)} className="text-2xl text-red-500  items-end hover:text-red-900 transition-transform "> X </button>
                            </li>
                        ))}
                    </ul>


                </div>

            </div>
        </div>
        </>
    )
  }