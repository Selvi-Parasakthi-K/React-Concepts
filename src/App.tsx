import "./App.css";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import Login from "./components/Login";
import UseMemoWith from "./components/UseMemoWith";
import UseMemoWithout from "./components/useMemoWithout";

function App() {
  return (
    <div className="">
      <Login />
      <Counter />
      <FocusInput />
      {/* <UseMemoWithout /> */}
      <UseMemoWith />
    </div>
  );
}

export default App;
