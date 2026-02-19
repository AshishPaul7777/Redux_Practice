import { useState } from "react";
import type { Task } from "@/types/task";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskDetailsModal from "./TaskDetailsModal";
// import { GripVertical } from "lucide-react/dist/esm/icons/grip-vertical";


export default function TaskCard({ task }: { task: Task }) {
  const [open, setOpen] = useState(false);

  const { 
    attributes,
     setNodeRef,
     listeners, 
     transform, 
     transition, 
    } =
    useSortable({
      id: task.id,
    });

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
  {...listeners}
  className="p-3 mb-3 space-y-2 cursor-pointer"
  onClick={() => setOpen(true)}

>
        <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <span
        {...listeners}
        onClick={(e) => e.stopPropagation()}
        className="cursor-grab select-none text-muted-foreground"
      >
       
      </span>

      <h4 className="font-semibold">{task.title}</h4>
    </div>

    <Badge
  variant="outline"
  className={
    task.priority === "P0"
      ? "border-red-500 text-red-600"
      : task.priority === "P1"
      ? "border-orange-500 text-orange-600"
      : task.priority === "P2"
      ? "border-yellow-500 text-yellow-600"
      : "border-green-500 text-green-600"
  }
>
  {task.priority}
</Badge>
  </div>

  <p className="text-sm text-muted-foreground">{task.description}</p>
</Card>


      <TaskDetailsModal
        task={task}
        open={open}
        
        onClose={() => setOpen(false)}
      />
    </>
  );
}