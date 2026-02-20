import type { TaskStatus } from "@/types/task";
import { useAppSelector } from "@/hooks/useAppSelector";
import TaskCard from "./TaskCard";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

interface TaskColumnProps {
  status: TaskStatus;
  title: string;
  color: string;
}

export default function TaskColumn({
  status,
  title,
  color,
}: TaskColumnProps) {
  const tasks = useAppSelector((state) =>
    state.tasks.tasks.filter((t) => t.status === status)
  );

  const { setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      style={{ backgroundColor: color }}
      className="w-72 p-4 rounded-lg min-h-[400px]"
    >
      <h3 className="font-semibold mb-4 text-gray-800">
        {title}
      </h3>

      <SortableContext
        items={tasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </SortableContext>
    </div>
  );
}