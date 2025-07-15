import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, password };
    console.log("Login data:", formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login response:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user",JSON.stringify(response.data.user));
      console.log("user",response.data.user)
      toast.success("Login successful");
      navigate("/dashboard");
      
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.response?.data?.message || "Invalid credentials");
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login to To-Do</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button type="submit" className="login-btn">Login</button>
         <p >
            Not Registered? Please <Link to="/" style={{color:"blue",fontSize:"20px"}}>Register</Link>
         </p>
      </form>
    </div>
  );
};

export default LoginPage;
