import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import type { Task } from "@/types/task";
import TaskDetailsModal from "./TaskDetailsModal";

export default function TaskCard({ task }: { task: Task }) {
  const [open, setOpen] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <Card
        ref={setNodeRef}
        style={style}
        {...attributes}
        onClick={() => setOpen(true)}
        className="p-3 mb-3 space-y-2 cursor-pointer hover:shadow-md transition"
      >
        {/* Drag Handle */}
        <div
          {...listeners}
          onClick={(e) => e.stopPropagation()} 
          className="cursor-grab text-muted-foreground"
        >
          <GripVertical size={16} />
        </div>

        <div className="flex justify-between items-center">
          <h4 className="font-semibold">{task.title}</h4>
          <Badge variant="outline">{task.priority}</Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          {task.description}
        </p>
      </Card>

      <TaskDetailsModal
        task={task}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}