import TaskColumn from "./TaskColumn";
import { DndContext, closestCorners } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { updateTaskStatus } from "./tasksSlice";
import type { TaskStatus } from "@/types/task";

export default function TaskBoard() {
  const dispatch = useAppDispatch();
  const states = useAppSelector((s) => s.states.list);

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;

    const newStatus =
      over.data.current?.sortable?.containerId ??
      (over.id as TaskStatus);

    if (!newStatus) return;

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
      <div className="flex gap-4 mt-6 overflow-x-auto">
        {states.map((state) => (
          <TaskColumn
            key={state.id}
            status={state.id}
            title={state.name}
            color={state.color}
          />
        ))}
      </div>
    </DndContext>
  );
}