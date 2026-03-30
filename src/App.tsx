import "./App.css";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import Login from "./components/Login";
import UseCallbackWith from "./components/UseCallbackWith";
// import UseCallbackWithout from "./components/UseCallbackWithout";
import UseMemoWith from "./components/UseMemoWith";
// import UseMemoWithout from "./components/useMemoWithout";

function App() {
  return (
    <div className="">
      <Login />
      <Counter />
      <FocusInput />
      {/* <UseMemoWithout /> */}
      <UseMemoWith />
      {/* <UseCallbackWithout /> */}
      <UseCallbackWith />
    </div>
  );
}

export default App;
