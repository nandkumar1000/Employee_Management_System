import React, { useState } from 'react';

const Login = ({ handleLogin }) => { // Corrected prop name: 'hadleLogin' -> 'handleLogin'
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log("email is:", email);
    console.log("password is:", password);
    handleLogin(email, password); // Call the correctly named prop: 'hadleLogin' -> 'handleLogin'
    SetEmail("");
    SetPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl border border-emerald-500 rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-emerald-600 mb-6">Login</h2>
        <form onSubmit={SubmitHandler} className="flex flex-col space-y-4">
          <input
            required
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            className="w-full px-4 py-3 border border-emerald-400 rounded-full text-gray-800 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
          />
          <input
            required
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            className="w-full px-4 py-3 border border-emerald-400 rounded-full text-gray-800 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
          />
          <button
            type="submit"
            className="w-full py-3 bg-emerald-600 text-white text-lg font-semibold rounded-full hover:bg-emerald-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;