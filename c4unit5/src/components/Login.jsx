import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch();
  };

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* On this button click make network req to find user with same username and password */}

      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}

      <button
        className="submit"
        type="submit"
        onSubmit={(e) => handleSubmit(e)}
      >
        Login
      </button>
    </div>
  );
};
