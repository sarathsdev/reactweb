import React, { useState, useEffect } from "react";

export default function Test4() {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data); // Store fetched users
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Runs only once when component mounts

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>
            <strong>{user.name}</strong> ({user.username})  
            <br />
            📧 {user.email}
            <br />
            🏙️ {user.address.city},{user.address.suite}, {user.address.street} , {user.address.zipcode}
          </li>
        ))}
      </ul>
    </div>
  );
}
