import React from "react";
import ReactDOM from "react-dom/client";
import { Hook } from "./hook";
const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  const [message, setMessage] = Hook("username", "zhangsan");
  return (
    <>
    <div>{message}</div>
    <button type="button" onClick={()=>{setMessage("lisi")}}>改名字</button>
    </>
  );
}
root.render(
  <>
    <App />
  </>
);
