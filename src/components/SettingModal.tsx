export default function SettingsModal({ open, onClose }: 
    { open: boolean; onClose: () => void }) {
    if (!open) return null; 
    return (
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-lg font-bold mb-4">Settings</h2>
  
          <input
            placeholder="New State Name"
            className="w-full border p-2 rounded mb-2"
          />
  
          <input
            placeholder="Color (e.g. bg-blue-200)"
            className="w-full border p-2 rounded mb-4"
          />
  
          <button className="w-full bg-black text-white py-2 rounded">
            Add State
          </button>
  
          <button
            className="mt-4 text-sm text-gray-500"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }