export const Discard = ({ onConfirm, onCancel }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-sm w-full mx-4">
      <h1 className="text-2xl font-bold mb-2 text-black">Discard Changes?</h1>
      <p className="text-gray-500 mb-6">Are you sure? This cannot be undone.</p>
      
      <div className="flex gap-3 justify-center">
        <button 
          onClick={onConfirm} 
          className="bg-red-500 text-white px-6 py-2 rounded font-semibold hover:bg-red-600"
        >
          Discard
        </button>
        <button 
          onClick={onCancel} 
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded font-semibold hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};