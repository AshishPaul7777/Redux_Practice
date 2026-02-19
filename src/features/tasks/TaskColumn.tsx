import type { TaskStatus } from "@/types/task";
import { useAppSelector } from "@/hooks/useAppSelector";
import TaskCard from "./TaskCard";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

export default function TaskColumn({ status }: { status: TaskStatus }) {
  const tasks = useAppSelector((state) =>
    state.tasks.tasks.filter((t) => t.status === status)
  );

  const { setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className="w-1/3 bg-muted p-4 rounded-lg min-h-[400px]"
    >
      <h3 className="font-bold mb-4">{status}</h3>

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