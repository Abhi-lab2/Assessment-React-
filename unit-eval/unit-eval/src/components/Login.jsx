import { useState } from "react";
import axios from "axios";

export const Login = () => {
  //  use reqres to log user in.
  const [emp, setEmp] = useState({
    username: "",
    password: "",
  });

  const [data, setData] = useState({});

  const handleChange = (e) => {
    e.preventDefault();

    setEmp({
      ...emp,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = emp;

    axios.post("https://reqres.in/api/login", data).then(({ newData }) => {
      setData(newData);
    });
  };

  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={handleChange}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={handleChange}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
