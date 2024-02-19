import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [form, setForm] = useState({phone:"", name: ""});

  const handalClick = () => {
    alert("Hey !");
  };

  const mouseOver = () => {
    alert("mouse hover");
  };

  const handalChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  return (
    <>
      <div>
        <button onClick={handalClick}>Click me</button>
        <div className="red" onMouseOver={mouseOver}>
          I am red box
        </div>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handalChange}
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handalChange}
        />
      </div>
    </>
  );
}

export default App;
