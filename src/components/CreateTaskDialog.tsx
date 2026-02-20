import { useDispatch } from "react-redux";
import { addTask } from "@/features/tasks/tasksSlice";
import { Button } from "@/components/ui/button";
import { v4 as uuid } from "uuid";

export default function CreateTaskDialog() {
  const dispatch = useDispatch();

  const createTask = () => {
    dispatch(
      addTask({
        id: uuid(),
        title: "Sample Task",
        description: "This is a Jira MVP task",
        status: "todo",
        priority: "P2",
      })
    );
  };

  return <Button onClick={createTask}>Create Task</Button>;
}