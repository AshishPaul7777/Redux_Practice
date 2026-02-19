import type { Task, Priority } from "@/types/task";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { updateTask } from "./tasksSlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { deleteTask } from "./tasksSlice";

export default function TaskDetailsModal({
  task,
  open,
  onClose,
}: {
  task: Task;
  open: boolean;
  onClose: () => void;
}) {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState<Priority>(task.priority);

  const save = () => {
    dispatch(
      updateTask({
        ...task,
        title,
        description,
        priority,
      })
    );
    onClose();
  };
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
  
    if (!confirmDelete) return;
  
    dispatch(deleteTask(task.id));
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
<DialogContent className="flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle>Edit Task</DialogTitle>
    </DialogHeader>

    <div className="space-y-1">
      <label className="text-sm font-medium">Title</label>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>

    <div className="space-y-1">
      <label className="text-sm font-medium">Description</label>
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>

    <div className="space-y-1">
      <label className="text-sm font-medium">Priority</label>
      <Select
        value={priority}
        onValueChange={(v) => setPriority(v as Priority)}
      >
        <SelectTrigger className="w-[160px] bg-background border border-input">
          <SelectValue placeholder="Select priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="P0">P0 (Critical)</SelectItem>
          <SelectItem value="P1">P1 (High)</SelectItem>
          <SelectItem value="P2">P2 (Medium)</SelectItem>
          <SelectItem value="P3">P3 (Low)</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="flex justify-between mt-6">
    <Button
  type="button"
  onClick={handleDelete}
  className="bg-red-600 text-white hover:bg-red-700 border border-red-600"
>
  Delete Task
</Button>

      <Button
        className="bg-black text-white hover:bg-gray-800"
        onClick={save}
      >
        Save
      </Button>
    </div>
  </DialogContent>
</Dialog>
  );
}