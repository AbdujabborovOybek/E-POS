import React from "react";
import "./assets/Login.css";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const { username, password } = data;

    if (username === "admin" && password === "admin") {
      const token = "12qwfqw-wqewfsv-dge5t34gw-htfdgbw4-wehetj-4t4t4t";
      localStorage.setItem("token", token);
      window.location.href = "/";
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <img src={require("./assets/icon.svg").default} alt="logo" />

        <label>
          <AiOutlineUser />
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            placeholder="Username"
            defaultValue="admin"
          />
        </label>

        <label>
          <RiLockPasswordLine />
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            placeholder="Password"
            defaultValue="admin"
          />
        </label>

        <label className="login_btn">
          <input type="submit" value="Login" />
        </label>
      </form>
    </div>
  );
};
