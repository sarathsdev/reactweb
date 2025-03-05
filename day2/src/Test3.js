import React, { useState, useEffect, useRef } from "react";

export default function Test3() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // Create a reference to store the previous count

  useEffect(() => {
    prevCountRef.current = count; // Update the ref with the latest count value
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCountRef.current}</h3>
      <button onClick={() => setCount(count + 1)} style={{ padding: "5px 10px" }}>Increment</button>
    </div>
  );
}
