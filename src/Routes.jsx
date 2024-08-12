import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import AddTask from './components/AddTask.jsx';
import ShowTask from './components/ShowTask.jsx';
import AuthForm from './components/AuthForm.jsx';
import getUserTasks from './api/TaskCrud.jsx';

const Routes = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (userId) {
          const response = await getUserTasks(userId);
          setTaskList(response);
        }
      } catch (error) {
        console.error('An error occurred while fetching tasks:', error);
      }
    };

    if (isAuthenticated) {
      fetchTasks();
    }
  }, [isAuthenticated, userId]);

  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('isAuthenticated', status);
  };

  return (
    <Router>
      <Switch>
        <Route path="/auth" element={<AuthForm handleAuthentication={handleAuthentication} />} />
        {isAuthenticated ? (
          <Route path={`/tasks/user/${userId}`} element={
            <div className="container">
              <Header>ANGELO</Header>
              <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} userId={userId} />
              <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} userId={userId} />
            </div>
          } />
        ) : (
          <Route path="*" element={<Navigate to="/auth" replace />} />
        )}
      </Switch>
    </Router>
  );
};

export default Routes;
