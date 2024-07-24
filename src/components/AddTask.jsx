import React from "react";

const AddTask=({taskList,setTaskList,task,setTask})=>{
    const handleSumbit=(e)=>{
        e.preventDefault();
        if(task.id){
            const date=new Date()
            const updatedTaskList=taskList.map(
                (todo)=>(todo.id === task.id ? {id:task.id,name:e.target.task.value,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:todo)
            );
            setTaskList(updatedTaskList);
            setTask({})

        }else{
            const date =new Date()
        console.log(date.getTime())
        console.log(e.target.value)
        console.log(e.target.task.value)
        const newTask={id:date.getTime(),name:e.target.task.value,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
        setTaskList([...taskList,newTask]);
        setTask({})
        }
    }
    return(
        <div className="">
        <section className="addTask ">
            <form onSubmit={handleSumbit}>
                <input type="text" name="task" value={task.name || ""} autoComplete="off" maxLength="25" placeholder="add task" onChange={e=>setTask({...task,name:e.target.value})} ></input>
                <button type="">{task.id ? "edit task":"add"}</button>
            </form>
        </section>
        </div>
    );
};
export default AddTask