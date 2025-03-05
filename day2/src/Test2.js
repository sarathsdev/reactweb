import React, { createContext, useContext } from "react";

// Step 1: Create a Context with a default value ("light")
const ThemeContext = createContext("light");

export default function App() {
  return (
    // Step 2: Provide a value ("dark") to the Context
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  // Step 3: Consume the context value using useContext
  const theme = useContext(ThemeContext);

  // Step 4: Apply the theme dynamically
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Current Theme: {theme}</h2>
    </div>
  );
}

//-------------------------------------------------------------------------------
// The Context API allows data to be shared across components without prop drilling.
//🔹 What is Prop Drilling?
// Prop Drilling happens when data (props) needs to be passed through multiple components just to reach a deeply nested component.

// Imagine we have a theme ("dark") stored in the App component,
// but a deeply nested Button component needs access to it.

// import React from "react";

// export default function App() {
//   const theme = "dark"; // Theme is in App component

//   return <Parent theme={theme} />;
// }

// function Parent({ theme }) {
//   return <Child theme={theme} />;
// }

// function Child({ theme }) {
//   return <Button theme={theme} />;
// }

// function Button({ theme }) {
//   return (
//     <button style={{ background: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000" }}>
//       Themed Button
//     </button>
//   );
// }
