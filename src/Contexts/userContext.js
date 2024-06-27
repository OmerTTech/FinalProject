import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [token, setToken] = useState("");
  const [isLogged, setIsLogged] = useState([]);

  useEffect(() => {
    setIsLogged(false);
    setToken(false)
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* const adminToken = () => {
    return (token === "admin123")
  } */
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        isLogged,
        setIsLogged,
        isSmallScreen
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
