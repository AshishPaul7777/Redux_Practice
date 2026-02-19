
export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export type Priority = "P0" | "P1" | "P2" | "P3";
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
}