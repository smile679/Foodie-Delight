import { useEffect, useState } from "react";
import { useUserContext } from "../Context/Context";


const CartItem =({ item})=>{
 const { cart,setCart, handleRemove } = useUserContext()
 const [ quantity, setQuantity] = useState();

  function handleQuantityChange(type){
     setCart(prevArr =>
      prevArr.map(cartItem => {
        if (cartItem.id === item.id) {
          let updatedQty = cartItem.quantity;

          if (type === "increment") {
            updatedQty += 1;
          } else if (type === "decrement" && cartItem.quantity > 1) {
            updatedQty -= 1;
          }
          return { ...cartItem, quantity: updatedQty };
        }
        
        return cartItem;
      })
    );
  }
  useEffect(()=>{
    cart.map((quan)=>{
      if(quan.id === item.id){
        setQuantity(quan.quantity)
      }
    })
  },[cart])
 
   
  return <div className="relative flex h-24 p-2 mb-5 rounded-lg shadow-gray-600 shadow-lg">
       <img src={item.image} alt={item.title} className="w-24 object-cover rounded-lg"/>
       <div className="px-6">
        <h3 className="font-bold text-orange-950">{item.title}</h3>
        <div className="flex items-center text-lg sm:text-xl text-orange-950 font-bold gap-x-3">
          <p className="text-orange-600 cursor-default">Quantity:</p>
          <button className="text-2xl cursor-pointer hover:scale-130" onClick={()=>handleQuantityChange("decrement")}>-</button>
          <p className="text-orange-600 cursor-default">
            { quantity }
          </p>
          <button className="text-2xl cursor-pointer hover:scale-130" onClick={()=>handleQuantityChange("increment")}>+</button>
        </div>
        <p className="text-orange-600 font-bold">Price: {(item.pricePerServing/100).toFixed(2)} $</p>
       </div>
       <button className="absolute right-0 top-0 font-bold text-white bg-red-600 px-1.5 rounded-sm hover:scale-110"
       onClick={()=>handleRemove(item.id)}
       >X</button>
  </div>
}

export default CartItem;