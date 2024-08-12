import React from "react";
import { addTasks, updateTask } from '../api/TaskCrud';  // Update the import path accordingly

const AddTask = ({ taskList, setTaskList, task, setTask, userId }) => {

    const formatDateTime = (date) => {
        const isoString = date.toISOString(); 
        return isoString.substring(0, 19); 
      };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    console.log(date.getTime())
    
    if (task.id) {
      // Update an existing task
      const updatedContent = {
        content: e.target.task.value,
        datetime: formatDateTime(date)
      };
      try {
        const updatedTask = await updateTask(userId, task.id, updatedContent);
        const updatedTaskList = taskList.map(
          (todo) => (todo.id === task.id ? updatedTask : todo)
        );
        setTaskList(updatedTaskList);
        setTask({});
      } catch (error) {
        console.error('Failed to update task:', error);
      }
    } else {
      // Add a new task
      const newTask = {
        taskid:date.getTime(),
        content: e.target.task.value,
        datetime: formatDateTime(date)
      };
      try {
        const addedTask = await addTasks(userId, newTask);
        console.log(userId)
        setTaskList([...taskList, addedTask]);
        setTask({});
      } catch (error) {
        console.error('Failed to add task:', error);
      }
    }
  };

  return (
    <div>
      <section className="addTask">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={task.content || ""}
            autoComplete="off"
            maxLength="25"
            placeholder="add task"
            onChange={e => setTask({ ...task, content: e.target.value })}
          />
          <button type="submit">{task.id ? "Edit Task" : "Add"}</button>
        </form>
      </section>
    </div>
  );
};

export default AddTask;
