import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para cargar las tareas
  const fetchTasks = async (status) => {
    setLoading(true);
    setError(null);
  
    try {
      const url = status
        ? `http://localhost:8000/api/tasks?status=${status}`
        : "http://localhost:8000/api/tasks";
  
      const response = await axios.get(url);
      setTasks(response.data.response);
    } catch (err) {
      setError("Hubo un error al cargar las tareas");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const createTask = async ({ title, description }) => {
    try {
      const response = await fetch('http://localhost:8000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
  
      if (!response.ok) {
        throw new Error('No se pudo crear la tarea');
      }
  
      const data = await response.json();
      fetchTasks()
      return data;  
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      throw error;
    }
  };
  


  return (
    <TaskContext.Provider value={{ tasks, loading, error, fetchTasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export const useTaskContext = () => useContext(TaskContext);
