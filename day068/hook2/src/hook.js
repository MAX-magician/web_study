import { useEffect, useState } from "react";
export function Hook(key, value) {
  const [message, setMessage] = useState(value);
  useEffect(() => {
    window.localStorage.setItem(key, message);
  }, [key, message]);
  return [message, setMessage];
}
