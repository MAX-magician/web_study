import React from "react";
import ReactDOM from "react-dom/client";
import Y from "./Y";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{ height: "2000px" }}>
    <App />
  </div>
);
function App() {
  return <div style={{ position: "fixed", top: "0" }}>{Y()}</div>;
}
