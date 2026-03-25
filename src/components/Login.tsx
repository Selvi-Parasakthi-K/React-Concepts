import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("User Name:", userName);
    console.log("Password", password);
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md flex flex-col gap-4 w-[30%]">
        <h3 className="text-xl font-semibold text-black text-center">Login</h3>
        <input
          id="username"
          type="text"
          placeholder="Enter User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-400 text-white p-2 rounded cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
