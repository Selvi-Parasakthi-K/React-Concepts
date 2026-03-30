import { useState } from "react";
import UseCallbackHelper from "./UseCallbackHelper";

const UseCallbackWithout = () => {
  const [input, setInput] = useState(1);
  const [light, setLight] = useState(true);

  const getItems = () => {
    return [input + 10, input + 100];
  };

  const theme = {
    backgroundColor: light ? "white" : "black",
    color: light ? "grey" : "white",
  };

  return (
    <div
      style={theme}
      className="h-screen flex flex-col justify-center items-center gap-5"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => {
          const value = Number.parseInt(e.target.value);
          setInput(Number.isNaN(value) ? 0 : value);
        }}
        className="border p-2 rounded"
      />

      <button
        onClick={() => setLight((prevLight) => !prevLight)}
        className="bg-blue-400 text-white p-2 rounded cursor-pointer"
      >
        {light ? "dark mode" : "light mode"}
      </button>

      <UseCallbackHelper getItems={getItems} />
    </div>
  );
};

export default UseCallbackWithout;
