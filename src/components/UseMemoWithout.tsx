import { useState } from "react";

const UseMemoWithout = () => {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(0);

  const expenseFunction = (count: any) => {
    console.log("Calculating expense...");
    let total = 0;
    for (let i = 0; i < 100; i++) {
      total += count;
    }
    return total;
  };

  const result = expenseFunction(count);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="bg-white flex justify-center items-center w-[30%] flex-col p-5 rounded-md shadow-md gap-4">
        <div>Count: {count}</div>
        <div>Render Count: {render}</div>
        <div>result: {result}</div>
        <button
          className="px-3 py-1 bg-blue-400 text-white rounded-sm"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
        <button
          className="px-3 py-1 bg-blue-400 text-white rounded-sm"
          onClick={() => setRender(render + 1)}
        >
          Render Count
        </button>
      </div>
    </div>
  );
};

export default UseMemoWithout;
