import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isLogged, setIsLogged] = useState([]);

  useEffect(() => {
    setIsLogged(false);
    setToken(false)
  }, []);

  /* const adminToken = () => {
    return (token === "admin123")
  } */
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        adminToken,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
