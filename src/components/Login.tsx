import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = () => {
    if (userName === "admin" && password === "selvi") {
      setIsLoggedIn(true);
      alert("login successful");
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      {isLoggedIn === false && (
        <div className="bg-white p-6 rounded-md shadow-md flex flex-col gap-4 w-[30%]">
          <h3 className="text-xl font-semibold text-black text-center">
            Login
          </h3>
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
      )}

      {isLoggedIn && (
        <div>
          <h3>Welcome {userName} successfully logged in</h3>
        </div>
      )}
    </div>
  );
};

export default Login;
