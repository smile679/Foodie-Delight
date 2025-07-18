import { useEffect, useState, useMemo } from "react";
import { useUserContext } from "../Context/Context";
import CartItem from "./CartItem";
import Receipt from "./Receipt";
import Payment from "./Payment";


const Cart = ()=>{
  const { cart } = useUserContext();
  const [ food , setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ error, setError] = useState(null);
  const [tax, setTax] = useState(0)
  const [price, setPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0);
  
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

    // console.log(data);
    } catch(err){
      console.error(err)
      setError("Something went wrong while fetching recipes.");
    } finally {
      setIsLoading(false)
    }
  }

  const cartIds = useMemo(() => JSON.stringify(cart.map(item => item.id)), [cart]);

  useEffect(()=>{
    fetchCart();
    // console.log(cart)
  },[cartIds])

  useEffect(()=>{
    let total = 0;
    cart.forEach((cartItem)=>{
      const foodItem = food.find(foodie=> cartItem.id === foodie.id)
      if(foodItem){
        const price = ((foodItem.pricePerServing/100).toFixed(2))*cartItem.quantity
        total += price
      }
    })

    const computedTax = (Number(total) * 0.1).toFixed(2);
    const computedTotal = Number(total) + Number(computedTax);

    setPrice(total)
    setTax(computedTax)
    setTotalPrice(computedTotal.toFixed(2))
    
    // console.log(`price: ${price}`)
    // console.log(`tax: ${tax}`)
    // console.log(`total: ${totalPrice}`)
  },[cart, food])


  return <section className="w-full py-20">
    { isLoading ? <div className= "flex justify-center items-center">
      <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-orange-500 text-xl sm:text-2xl font-semibold ml-1"> Loading..</p>
      </div> : error ? <p className="text-orange-600 font-semibold"> {error}</p> :
    <div className="max-w-6xl mx-auto flex flex-col justify-center items-center px-5">
      <h2 className="text-orange-950 my-10 text-shadow-gray-500 text-shadow-lg">Checkout page</h2>

        <div className="w-full flex max-md:flex-col justify-between max-md:items-center gap-5">
          <div className="w-full sm:w-lg flex flex-col">
             {food.map((item)=>( <CartItem key={item.id} item={item}/>))}
          </div>

      <div className="w-full sm:w-lg flex flex-col">
        <div className="w-full flex flex-col justify-center bg-orange-100 shadow-lg shadow-orange-800 rounded-lg">
        <div className="w-full py-5 border-b-1 border-dashed">
          <h3 className="flex items-center flex-col text-2xl font-bold text-orange-950 italic">
          Order Summary
          <span className="text-lg">Foodie Delight</span></h3>
        </div>
          {food.map((items)=>( <Receipt key={items.id} items={items} />))}
        <div className="flex justify-between px-2 py-3">
            <p className="text-sm text-orange-950 italic">Tax :</p>
            <p className="text-sm text-orange-950 italic">{tax} $</p>
          </div>
          <div className="flex justify-between px-2 py-3">
            <p className="text-sm text-orange-950 italic">Price :</p>
            <p className="text-sm text-orange-950 italic">{price.toFixed(2)} $</p>
        </div>
          <div className="flex justify-between px-2 py-3 mb-5 border-t-1 border-dashed">
            <p className="text-sm text-orange-950 italic">Tottal price :</p>
            <p className="text-sm text-orange-950 italic">{totalPrice} $</p>
        </div>
          <p className="text-sm italic text-orange-950 self-center">{new Date().toLocaleString()}</p>
      </div>
        <div className="w-full my-10 flex flex-col items-center">
          <Payment totalPrice={totalPrice}/>
        </div>
      </div>
        </div>
    </div> 
    }
  </section>
}

export default Cart;