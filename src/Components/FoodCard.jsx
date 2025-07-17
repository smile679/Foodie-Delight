import { useNavigate } from "react-router-dom";
import Reveal from "./Reveal";
import { useUserContext } from "../Context/Context";
import { useState } from "react";


const FoodCard =({ foods})=>{
  const [ added, setAdded ] = useState(false);
  const [cartQuantity ,setCartQuantity ] = useState(1)
  const navigate = useNavigate();
  const { setCart } = useUserContext()

  function handleQuantity(data){
      if(data === "increment"){
        setCartQuantity(cartQuantity + 1)
      } else if ( data === "decrement" && cartQuantity > 1) {
        setCartQuantity(cartQuantity - 1)
      }
    }

  function handleClick(id){
    navigate(`/ingredient/${id}`)
  }

  function addItem(foods){
    setCart(prevArr=>{
      const exist = prevArr.find( item => item.id === foods.id)

    if (exist){
      return prevArr.map(item =>
        item.id === foods.id
          ? { ...item, quantity: cartQuantity }
          : item
      );
      } else {
        // Add new item
      return [...prevArr, { id: foods.id, quantity: cartQuantity }];
      }
    });

    setAdded(true)
    setTimeout(()=>setAdded(false),1500);
  }

  return (
    <Reveal>
      <div className="card">
      <img src={foods?.image} alt={foods.title} className="image" />
      <div className="w-full flex justify-between flex-col items-center py-3">
        <p className="text-gray-500 leading-6">{foods.title}</p>
        <button className="button px-12" onClick={()=>{ handleClick(foods.id)}}>Cook Now</button>
        <div className="relative flex justify-center items-center bg-orange-500 py-1 px-3 mt-2 rounded-lg text-white font-semibold hover:drop-shadow-orange-800 hover:drop-shadow-lg
         hover:scale-105 transition-all duration-200">
          <button className="flex flex-col" onClick={()=>(addItem(foods))}>Order food
          <span className="text-[10px]">Add to cart</span></button>
          { added ? <svg className="w-8 h-8 text-orange-500 absolute bottom-3 -right-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd"/>
          </svg> : ''}
          <button className="ml-2 text-2xl cursor-pointer hover:scale-130" onClick={()=>handleQuantity("decrement")}>-</button>
          <p className="mx-2 cursor-default">{cartQuantity}</p>
          <button className=" text-2xl cursor-pointer hover:scale-130" onClick={()=>handleQuantity("increment")}>+</button>
        </div>
      </div>
    </div>
    </Reveal>
  )
}

export default FoodCard;