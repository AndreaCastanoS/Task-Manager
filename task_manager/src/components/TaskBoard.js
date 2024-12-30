import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskList from "./TaskList";
import NewTask from "./NewTask";
import Modal from "./ModalTask";

const TaskBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks, fetchTasks } = useTaskContext();
  const [filterStatus, setFilterStatus] = useState("");
 
  const handleFilterChange = (event) => {
    const status = event.target.value; 
    setFilterStatus(status); 
    fetchTasks(status); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md p-6 space-y-8">
        <div className="p-6 ">
          <h1 className="text-4xl font-bold text-gray-700 text-center pb-6 ">
            Tablero de Tareas
          </h1>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-slate-400 text-black px-4 py-2 rounded-md hover:bg-slate-600 content-end "
            >
              Crear tarea
            </button>
            <div>
              <select
                value={filterStatus}
                onChange={handleFilterChange}
                className="p-2 border rounded-md"
              >
                <option value="">Todos</option>
                <option value="pending">Pendiente</option>
                <option value="completed">Completada</option>
              </select>
            </div>
          </div>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2 className="text-lg font-bold mb-4">Crear Nueva Tarea</h2>
            <NewTask  /> {/* Pasa onClose a NewTask */}
          </Modal>
        </div>
        <div className="flex justify-center ">
          <TaskList
            tasks={tasks}
            title="Tareas por Hacer"
            emptyMessage="No hay tareas pendientes."
          />
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
