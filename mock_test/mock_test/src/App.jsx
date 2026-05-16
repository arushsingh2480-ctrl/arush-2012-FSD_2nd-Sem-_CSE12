import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [studentname, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !studentname ||
      !email ||
      !password ||
      !course ||
      !mobilenumber
    ) {
      setError("All fields are required");
      setSuccess("Done");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Registration Successful!");
    setStudentName("");
    setEmail("");
    setPassword("");
    setCourse("");
    setMobileNumber("");
  }

return (
<div className="container"><div className="form-box"><h1>Student Registration Form</h1>
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Student Name"
value={studentname}
onChange={(e) => setStudentName(e.target.value)}
 /><br></br>
<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/><br></br>
<input
type="password"
placeholder="Password"
value={password}
 onChange={(e) => setPassword(e.target.value)}
 /><br></br>
 <input
 type="text"
  placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          /><br></br>

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobilenumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          /><br></br>
          <button type="submit">
            Register
          </button>
</form>
{error && <p className="error">{error}</p>}
{success && <p className="success">{success}</p>}
</div>    
  </div>
  );
}

export default App;