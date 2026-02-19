import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task, TaskStatus } from "@/types/task";

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },

    updateTask(state, action: PayloadAction<Task>) {
      const index = state.tasks.findIndex(
        (t) => t.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },

    updateTaskStatus(
      state,
      action: PayloadAction<{ id: string; status: TaskStatus }>
    ) {
      const task = state.tasks.find(
        (t) => t.id === action.payload.id
      );
      if (task) {
        task.status = action.payload.status;
      }
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});

export const {
  addTask,
  updateTask,
  updateTaskStatus,
  deleteTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;