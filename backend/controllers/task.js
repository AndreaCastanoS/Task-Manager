const Task = require('../models/Task.js');

const controller = {
  create: async (req, res) => {
    try {
      // Validación en servidor
      const { title, description } = req.body;
      if (!title) {
        return res.status(400).json({
          success: false,
          message: "The field 'title' is required.",
        });
      }

      // Creando la nueva tarea
      const newTask = await Task.create({ title, description });
      res.status(201).json({
        success: true,
        message: "The task was successfully created.",
        response: newTask,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error creating the task.",
        error: error.message,
      });
    }
  },

  read: async (req, res) => {
    try {
      const { status } = req.query; 
      
      const filter = {};
      if (status) {
        if (status === "completed" || status === "pending") {
          filter.status = status === "completed";
        } else {
          return res.status(400).json({
            success: false,
            message: "Invalid status value. Use 'completed' or 'pending'.",
          });
        }
      }

      const tasks = await Task.find(filter);
      res.status(200).json({
        success: true,
        message: "Tasks retrieved successfully.",
        response: tasks,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error retrieving tasks.",
        error: error.message,
      });
    }
  },

};

module.exports = controller;
