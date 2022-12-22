import { useState } from "react";

function Y() {
  const [y, setY] = useState(0);
  window.addEventListener("scroll", () => {
    setY(document.documentElement.scrollTop);
  });
  return y;
}
export default Y;
