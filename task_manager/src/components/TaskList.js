import React, { useEffect } from "react";
import { useTaskContext } from "../context/TaskContext";

import TaskItem from "./TaskItem";

const TaskList = ({tasks})  => {
  const { loading, error, fetchTasks} = useTaskContext();

 
  useEffect(() => {
    fetchTasks();  
  }, []); 

  if (loading) {
    return <p className="text-center">Cargando tareas...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }
  return (
    <div className="w-full md:w-1/2 flex flex-col space-y-4 justify-center">
       <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4 text-center">Lista de tareas</h2> 
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskItem key={task._id} task={task} />)
       
      ) : (
        <p className="text-gray-500 italic">No hay tareas disponibles</p>
      )}
    </div>
  );
};

export default TaskList;