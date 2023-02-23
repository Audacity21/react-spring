import React, { useState } from "react";
import UserService from "../services/UserService";

const Signup = () => {
  const [user, setUser] = useState({
    id: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    UserService.saveUser(user)
      .then((res) => {
        alert("User registered successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Register here</h1>
      <form onSubmit={(e) => handleRegister(e)}>
        <label htmlFor="email">ID</label>
        <input
          type="number"
          name="id"
          id="id"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          id="phone"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
