import { useEffect, useState } from "react";
import { useUserContext } from "../Context/Context";



const Receipt = ({items}) =>{
  const { cart } = useUserContext();
  const price = (items.pricePerServing/100).toFixed(2);
  const [quantity, setQuantity]= useState(1)
  
   useEffect(()=>{
    cart.map((quan)=>{
      if(quan.id === items.id){
        setQuantity(quan.quantity)
      }
    })
  },[cart])
     
  return  <div className="w-full border-b border-dashed px-2 py-2">
              <div className="w-full flex justify-between">
                <p className="text-sm italic text-orange-950 pr-5">{items.title}</p>
                <p className="text-sm italic text-orange-950 text-nowrap">{price} $ X {quantity}</p>
              </div>
              <p className="text-sm italic text-orange-950 flex place-self-end">{(price*quantity).toFixed(2)} $</p>
            </div>
}

export default Receipt;