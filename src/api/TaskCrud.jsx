import React, { useEffect, useState } from 'react';
import axios from 'axios';
const baseUrl="http://localhost:8080/tasks"
const getUserTasks = async (userId) => {
    try {
      const response = await axios.get(`${baseUrl}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('An error occurred while fetching tasks:', error);
      throw error;
    }
  };

export default getUserTasks;


export const addTasks = async (userId, addedTask) => {
  try {
    const newTask = {
      taskid: addedTask.taskid,
      content: addedTask.content,
      datetime: addedTask.datetime 
    };
    console.log(newTask)
    const response = await axios.post(`${baseUrl}/addtask/${userId}`, newTask);
    return response.data;
  } catch (error) {
    console.error('An error occurred while creating the task:', error);
    throw error;
  }
};

export const updateTask = async (userId, taskId, updatedContent) => {
  try {
    const updatedTask = { content: updatedContent.content,datetime:updatedContent.datetime };
    const response = await axios.put(`${baseUrl}/update/${userId}/${taskId}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error('An error occurred while updating the task:', error);
    throw error;
  }
};

// Function to delete a task for a specific user (DELETE)
export const deleteTask = async (userId, taskId) => {
  try {
    const response = await axios.delete(`${baseUrl}/delete/${userId}/${taskId}`);
    return response.data;                                                           
  } catch (error) {
    console.error('An error occurred while deleting the task:', error);
    throw error;
  }
};                                                                                                                                                                                                                                                                                                                  