import React from "react";

const ShowTask = ({taskList,setTaskList,task,setTask})=>{
    const handleEdit=(id)=>{
        const selectedTak=taskList.find(todo=>todo.id===id);
        setTask(selectedTak)
    }
    const handleDelete=(id)=>{
        const updatedTaskList=taskList.filter(task => task.id !== id)
        setTaskList(updatedTaskList)
    }
    return (
        <>
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button className="clearAll" onClick={()=>setTaskList([])}>clear all</button>
            </div>
            <ul>
                {
                    taskList.map((task)=>(
                        <li key={task.id}>
                    <p>
                        <span className="name">{task.name}</span>
                        <span className="time">{task.time}</span>
                    </p>
                    <i onClick={()=>handleEdit(task.id)} className="bi bi-pencil-square"></i>
                    <i onClick={()=>handleDelete(task.id)} className="bi bi-trash"></i>
                </li>
                    ))
                }
                
            </ul>
        </section>
        </>
    )
};

export default ShowTask;