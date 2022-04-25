import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const data = {
    //   HardCoding the Email and Password as per reqres
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  const handleAuth = () => {
    if (auth) {
      setUser(null);
      setAuth(false);
      return;
    }
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.join())
      .then((data) => {
        setUser(data.user);
      });
  };

  return (
    <AuthContext.Provider value={{ auth, handleAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};
