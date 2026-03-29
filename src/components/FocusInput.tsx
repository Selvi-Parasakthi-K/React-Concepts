import { useRef } from "react";

const FocusInput = () => {
  const focusRef = useRef<HTMLInputElement>(null);
  const handleFocusInput = () => {
    focusRef.current?.focus();
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="bg-white flex justify-center items-center w-[30%] flex-col p-5 rounded-md shadow-md gap-4">
        <input
          ref={focusRef}
          type="text"
          placeholder="Enter your name"
          className="p-2 border rounded-sm"
        />
        <button
          className="px-3 py-1 bg-blue-400 text-white rounded-sm"
          onClick={handleFocusInput}
        >
          Focus
        </button>
      </div>
    </div>
  );
};

export default FocusInput;
