import Header from "./components/Header.jsx"
import AddTask from "./components/AddTask.jsx";
import ShowTask from "./components/ShowTask.jsx";
import "./App.css"

import { useEffect, useState } from "react"

function App() {
  const [taskList,setTaskList]=useState(JSON.parse(localStorage.getItem('taskList')) || []);
  const [task,setTask]=useState({})
  
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);
  return (
    <div>
      <div className="container">
    <Header >
          Taskmate
    </Header>
    <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
    <ShowTask  taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
    </div>
    </div>
    
  )
}

export default App
