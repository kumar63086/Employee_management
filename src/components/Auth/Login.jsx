import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
    // You can send the data to your backend API here
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          {/* Email Input */}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-400 w-full"
            type="email"
            placeholder="Enter email"
            required
          />

          {/* Password Input */}
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 mt-3 rounded-full text-xl placeholder:text-gray-400 w-full"
            type="password"
            placeholder="Enter password"
            required
          />

          {/* Submit Button */}
          <button
            className="mt-5 text-white outline-none bg-emerald-600 py-3 px-2 rounded-full text-xl w-full"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
