import React, { useState } from 'react';

function Password() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const toggleType = () => setShowPassword(!showPassword);

  return (
    <div>
      <label htmlFor="password" className="text-3xl decoration-white uppercase align-middle font-bold">
        Password:
      </label>
      <input
        id="password"
        className="w-60 ml-2 p-1 border border-gray-300 rounded"
        type={showPassword ? "text" : "password"}
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button
        className="ml-2 p-1 border border-gray-300 rounded bg-blue-500 text-white"
        onClick={toggleType}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default Password;
