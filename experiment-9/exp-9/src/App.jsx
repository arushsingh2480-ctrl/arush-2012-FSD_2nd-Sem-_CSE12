import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  function handleSubmit(e){  
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required!");
      setSuccess("");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email!");
      setSuccess("");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 6 characters!");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Registration Successful!");


    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">

      <div className="form-box">

        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Register
          </button>

        </form>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

      </div>

      <div className="users-box">

        <h2>API Users Data</h2>

        <div className="user-list">

          {users.slice(0,2).map((user) => (
            <div className="card" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default App;