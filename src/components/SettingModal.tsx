import { useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addState } from "@/features/tasks/statesSlice";

export default function SettingsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [color, setColor] = useState("bg-blue-200");

  if (!open) return null;

  const handleAdd = () => {
    if (!name.trim()) return;

    dispatch(
      addState({
        id: name.toLowerCase().replace(/\s+/g, "-"),
        name,
        color,
      })
    );

    setName("");
    setColor("bg-blue-200");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[380px]">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New State Name"
          className="w-full border rounded px-3 py-2 mb-3"
        />

        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Color (e.g. bg-blue-200)"
          className="w-full border rounded px-3 py-2 mb-4"
        />

        <button
          onClick={handleAdd}
          className="w-full bg-black text-white py-2 rounded mb-3"
        >
          Add State
        </button>

        <button
          onClick={onClose}
          className="w-full border py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}