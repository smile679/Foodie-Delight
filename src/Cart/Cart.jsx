import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../Context/Context";
import CartItem from "./CartItem";
import Receipt from "./Receipt";
import Payment from "./Payment";

const Cart = () => {
  const { cart } = useUserContext();
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tax, setTax] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const cartIds = useMemo(
    () => JSON.stringify(cart.map((item) => item.id)),
    [cart],
  );

  useEffect(() => {
    async function fetchCart() {
      if (!cart || !cart.length) {
        setFood([]);
        return;
      }

      setIsLoading(true);
      setError(null);
      const API_KEY = import.meta.env.VITE_API_KEY;

      try {
        const data = await Promise.all(
          cart.map(async (items) => {
            const res = await fetch(
              `https://api.spoonacular.com/recipes/${items.id}/information?apiKey=${API_KEY}`,
            );
            return await res.json();
          }),
        );
        setFood(data);
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching your cart.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCart();
  }, [cartIds, cart]);

  useEffect(() => {
    let total = 0;
    cart.forEach((cartItem) => {
      const foodItem = food.find((foodie) => cartItem.id === foodie.id);
      if (foodItem) {
        const itemPrice = (foodItem.pricePerServing / 100) * cartItem.quantity;
        total += itemPrice;
      }
    });

    const computedTax = total * 0.1;
    const computedTotal = total + computedTax;

    setPrice(total);
    setTax(computedTax);
    setTotalPrice(computedTotal);
  }, [cart, food]);

  if (isLoading) {
    return (
      <section className="w-full py-24 flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-600 text-lg font-semibold ml-3">
          Loading your cart...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full py-24 text-center">
        <p className="text-red-600 font-semibold">{error}</p>
      </section>
    );
  }

  if (!cart.length) {
    return (
      <section className="w-full py-24 flex flex-col items-center px-5">
        <p className="text-gray-500 text-sm mb-3">Your cart</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
          Nothing here yet
        </h2>
        <p className="text-gray-500 text-sm mb-8 text-center max-w-xs">
          Browse the menu and add a recipe you're craving.
        </p>
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-8 py-3 rounded-full transition"
        >
          Back to menu
        </Link>
      </section>
    );
  }

  return (
    <section className="w-full py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-500 text-sm mb-2 text-center">Almost there</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Checkout
        </h2>

        <div className="w-full flex max-md:flex-col justify-between gap-8">
          <div className="w-full sm:w-lg flex flex-col gap-4">
            {food.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="w-full sm:w-lg flex flex-col">
            <div className="w-full flex flex-col bg-white border border-gray-100 rounded-2xl shadow-sm">
              <div className="w-full py-5 border-b border-dashed border-gray-200 text-center">
                <h3 className="text-xl font-extrabold text-gray-900">
                  Order summary
                </h3>
                <span className="text-sm text-orange-500 font-medium">
                  Foodie Delight
                </span>
              </div>

              {food.map((item) => (
                <Receipt key={item.id} items={item} />
              ))}

              <div className="flex justify-between px-5 py-3 text-sm text-gray-600">
                <p>Subtotal</p>
                <p>${price.toFixed(2)}</p>
              </div>
              <div className="flex justify-between px-5 py-3 text-sm text-gray-600">
                <p>Tax</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between px-5 py-3 border-t border-dashed border-gray-200 font-semibold text-gray-900">
                <p>Total</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>

              <p className="text-xs text-gray-400 text-center pb-5">
                {new Date().toLocaleString()}
              </p>
            </div>

            <div className="w-full my-10 flex flex-col items-center">
              <Payment totalPrice={totalPrice.toFixed(2)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
