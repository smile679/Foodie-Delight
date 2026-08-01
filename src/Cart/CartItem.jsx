import { useEffect, useState } from "react";
import { useUserContext } from "../Context/Context";

const CartItem = ({ item }) => {
  const { cart, setCart, handleRemove } = useUserContext();
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(type) {
    setCart((prevArr) =>
      prevArr.map((cartItem) => {
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
      }),
    );
  }

  useEffect(() => {
    const matched = cart.find((cartItem) => cartItem.id === item.id);
    if (matched) setQuantity(matched.quantity);
  }, [cart, item.id]);

  const unitPrice = item.pricePerServing / 100;
  const lineTotal = unitPrice * quantity;

  return (
    <div className="relative flex h-32 md:h-28 p-3 bg-white border border-gray-100 rounded-2xl">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-full object-cover rounded-xl flex-shrink-0"
      />
      <div className="px-5 flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
          {item.title}
        </h3>

        <div className="flex items-center gap-3 mt-2">
          <button
            className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 text-sm hover:border-orange-500 hover:text-orange-500 transition"
            onClick={() => handleQuantityChange("decrement")}
          >
            −
          </button>
          <p className="text-sm font-semibold text-gray-900 w-4 text-center">
            {quantity}
          </p>
          <button
            className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 text-sm hover:border-orange-500 hover:text-orange-500 transition"
            onClick={() => handleQuantityChange("increment")}
          >
            +
          </button>
        </div>

        <p className="text-sm font-semibold text-orange-500 mt-2">
          ${lineTotal.toFixed(2)}
          <span className="text-xs text-gray-400 font-normal ml-1">
            (${unitPrice.toFixed(2)} each)
          </span>
        </p>
      </div>

      <button
        className="absolute right-3 top-3 w-6 h-6 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition text-sm"
        onClick={() => handleRemove(item.id)}
        aria-label={`Remove ${item.title} from cart`}
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
