import { createContext, useContext } from "react"

 export const UserContext = createContext();
 export const useUserContext = () => useContext(UserContext);

// Reusable provider component
export const UserProvider = ({ children, value }) => {
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};