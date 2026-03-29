import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h2 className="text-2xl text-blue-400 font-bold">Counter App</h2>
      <div className="flex gap-4 mt-5">
        <button
          className="text-2xl font-bold cursor-pointer border flex justify-center items-center h-10 w-10 shadow-md"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="text-2xl font-bold cursor-pointer border flex justify-center items-center h-10 w-10 shadow-md"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
      <div className="flex gap-5 justify-center items-center mt-5">
        <h2 className="text-2xl text-red-300 font-bold">Result:</h2>
        <h3 className="text-2xl text-blue-300 font-bold">{count}</h3>
      </div>
    </div>
  );
};

export default Counter;
