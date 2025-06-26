"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginSignup = ({ open, onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-signup-modal">
      <div className="login-signup-backdrop" onClick={onClose} />
      <div className="login-signup-box">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2 className="block-heading">{isSignup ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input
                type="text"
                name="fullName"
                value={form.value}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </>
          )}

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Emial"
            required
          />
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <span onClick={()=> setShowPassword(!showPassword)} className="eye-icon">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {isSignup && (
            <div className="password-input">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
            <span className="eye-icon" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}> {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18}  /> }  </span>

            </div>
          )}
          <button type="submit" className="submit-btn">
            {isSignup ? "Sign Up " : "Login"}
          </button>
        </form>
        <div className="toggle-link">
          {isSignup ? (
            <span>
              Already have an account?
              <button type="button" onClick={() => setIsSignup(false)}>
                Login
              </button>
            </span>
          ) : (
            <span>
              Create account?
              <button type="button" onClick={() => setIsSignup(true)}>
                Sign Up
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
