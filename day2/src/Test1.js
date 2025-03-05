import { useState } from "react";

export default function Test1() {
  const [items, setItems] = useState(["sarath","rahul","anshad","akshay"]);
  const [newItem, setNewItem] = useState("");


  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      console.log(items);
      setNewItem("");
    }
  };

  const deleteItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };


  
  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
          style={{ flex: 1, padding: "5px" }}
        />
        <button onClick={addItem} style={{ padding: "5px 10px" }}>Add</button>
      </div>


      <div>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "5px"
            }}
          >
            <span>{item}</span>
            <button
              onClick={() => deleteItem(index)}
              style={{ padding: "5px", backgroundColor: "red", color: "white", border: "none", borderRadius: "3px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
