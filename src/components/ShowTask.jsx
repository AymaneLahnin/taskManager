import React from "react";
import { deleteTask } from "../api/TaskCrud";
const ShowTask = ({taskList,setTaskList,setTask,userId})=>{
    const handleEdit=(id)=>{
        const selectedTak=taskList.find(todo=>todo.id===id);
        setTask(selectedTak)
    }
    const handleDelete=(userId,id)=>{
        try {
             deleteTask(userId, id);
            const updatedTaskList = taskList.filter(task => task.id !== id);
            setTaskList(updatedTaskList);
          } catch (error) {
            console.error('Failed to delete task:', error);
          }
        };
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
                        <span className="name">{task.content}</span>
                        <span className="time">{task.datetime}</span>
                    </p>
                    <i onClick={()=>handleEdit(task.id)} className="bi bi-pencil-square"></i>
                    <i onClick={()=>handleDelete(userId,task.id)} className="bi bi-trash"></i>
                </li>
                    ))
                }
                
            </ul>
        </section>
        </>
    )
};

export default ShowTask;