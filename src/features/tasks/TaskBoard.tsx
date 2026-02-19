import TaskColumn from "./TaskColumn";
import { DndContext, closestCorners } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { updateTaskStatus } from "./tasksSlice";
import type { TaskStatus } from "@/types/task";

export default function TaskBoard() {
  const dispatch = useAppDispatch();

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as TaskStatus;

    dispatch(
      updateTaskStatus({
        id: taskId,
        status: newStatus,
      })
    );
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragEnd={onDragEnd}
    >
      <div className="flex gap-4 mt-6">
        <TaskColumn status="TODO" />
        <TaskColumn status="IN_PROGRESS" />
        <TaskColumn status="DONE" />
      </div>
    </DndContext>
  );
}