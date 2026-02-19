import { useState } from "react";
import TaskBoard from "@/features/tasks/TaskBoard";
import CreateTaskDialog from "@/components/CreateTaskDialog";
import Sidebar from "@/components/Sidebar";
import SettingsModal from "./components/SettingModal"; 

export default function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Jira MVP</h1>

          <div className="flex items-center gap-3">
            <CreateTaskDialog />

            <button
              onClick={() => setSettingsOpen(true)}
              className="h-10 w-10 rounded-md border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
              title="Board settings"
            >
              ⚙️
            </button>
          </div>
        </div>

        <TaskBoard />

        <SettingsModal
          open={settingsOpen}
          onClose={() => setSettingsOpen(false)}
        />
      </main>
    </div>
  );
}