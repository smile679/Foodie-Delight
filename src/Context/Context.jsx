import { createContext, useContext, useState, useEffect } from "react"

 export const UserContext = createContext();
 export const useUserContext = () => useContext(UserContext);

// Reusable provider component
export const UserProvider = ({ children }) => {

  let [cart, setCart] = useState(()=>{
   const stored =localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  }, [cart])

  function handleRemove(id){
    setCart(prev => prev.filter(item => item.id !== id));
  }


  return (
    <UserContext.Provider value={{ cart, setCart, handleRemove}}>
      {children}
    </UserContext.Provider>
  );
};