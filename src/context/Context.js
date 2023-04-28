import { createContext, useContext, useState } from "react";

const ContextState = createContext();

export const StateProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <ContextState.Provider value={{ login, setLogin, userName, setUserName }}>
      {children}
    </ContextState.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextState);
