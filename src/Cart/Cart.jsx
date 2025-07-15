import { useEffect, useState } from "react";
import { useUserContext } from "../Context/Context";
import CartItem from "./CartItem";


const Cart = ()=>{
  const { cart } = useUserContext();
  const [ food , setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ error, setError] = useState(null);
  
  async function fetchCart(){
    if (!cart || !cart.length) {
      setFood([]); // clear food list if cart is empty
      return;
    }

    setIsLoading(true);
    const API_KEY = import.meta.env.VITE_API_KEY
    
    try{
    const data =await Promise.all(
      cart.map(async (items)=>{
        const res =await fetch(`https://api.spoonacular.com/recipes/${items.id}/information?apiKey=${API_KEY}`);
        return await res.json();
      })
    )
    setFood(data)

    console.log(data);
    } catch(err){
      console.error(err)
      setError("Something went wrong while fetching recipes.");
    } finally {
      setIsLoading(false)
    }
  }


  useEffect(()=>{
    fetchCart();
    console.log(cart)
  },[()=>cart.map(idd=>idd.id)])

// i want to call the use effect when the cart arrays id changes


  return <section className="py-20">
    { isLoading ? <div className= "flex justify-center items-center">
      <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-orange-500 text-xl sm:text-2xl font-semibold ml-1"> Loading..</p>
      </div> : error ? <p className="text-red-600 font-semibold"> {error}</p> :
    <div className="flex">
      <div className="flex flex-col">
        {food.map((item)=>( <CartItem key={item.id} item={item}/>))}
      </div>
      <div>
        {/* <h1> Price List</h1> */}
      </div>
    </div> 
    }
  </section>
}

export default Cart;