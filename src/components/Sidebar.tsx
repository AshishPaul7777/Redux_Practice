import { useState } from "react";

export default function Sidebar() {
  const [boards, setBoards] = useState<string[]>([
    "Main Board",
    "Sprint Board",
  ]);
  const [showInput, setShowInput] = useState(false);
  const [newBoard, setNewBoard] = useState("");

  const addBoard = () => {
    if (!newBoard.trim()) return;
    setBoards([...boards, newBoard]);
    setNewBoard("");
    setShowInput(false);
  };

  return (
    <aside className="w-60 h-screen border-r bg-background p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Boards</h2>
        <button
          onClick={() => setShowInput(true)}
          className="text-lg font-bold hover:text-primary"
          title="Add board"
        >
          +
        </button>
      </div>

      <ul className="space-y-2 text-sm">
        {boards.map((board, index) => (
          <li
            key={index}
            className="cursor-pointer rounded px-2 py-1 hover:bg-muted"
          >
            {board}
          </li>
        ))}
      </ul>

      {showInput && (
        <div className="mt-4 space-y-2">
          <input
            value={newBoard}
            onChange={(e) => setNewBoard(e.target.value)}
            placeholder="Board name"
            className="w-full rounded border px-2 py-1 text-sm"
          />
          <div className="flex gap-2">
            <button
              onClick={addBoard}
              className="text-sm text-primary font-medium"
            >
              Add
            </button>
            <button
              onClick={() => setShowInput(false)}
              className="text-sm text-muted-foreground"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="mt-auto pt-6 text-sm text-muted-foreground">
        ⚙ Board Settings
      </div>
    </aside>
  );
}