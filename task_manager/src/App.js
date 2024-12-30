
import './index.css';  

import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskBoard from "./components/pages/TaskBoard";

const App = () => {
  return (
    <TaskProvider>
      <TaskBoard />
    </TaskProvider>
  );
};

export default App;
