import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../Context/Context";
import Reveal from "./Reveal";

const FoodCard = ({ foods }) => {
  const navigate = useNavigate();
  const { setCart } = useUserContext();

  const [added, setAdded] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "increment") {
      setCartQuantity((prev) => prev + 1);
    } else if (type === "decrement") {
      setCartQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  const handleClick = (id) => {
    navigate(`/ingredient/${id}`);
  };

  const addItem = (food) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === food.id);

      if (exists) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, quantity: cartQuantity } : item,
        );
      }

      return [...prev, { id: food.id, quantity: cartQuantity }];
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  return (
    <Reveal>
      <div className="group overflow-hidden rounded-3xl bg-white ring-1 ring-gray-200 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]">
        {/* IMAGE */}
        <div className="relative h-60 overflow-hidden">
          <img
            src={foods.image}
            alt={foods.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Rating */}
          <div className="absolute top-4 right-4 rounded-full bg-black/60 px-3 py-1 backdrop-blur-md">
            <span className="text-sm font-semibold text-white">⭐ 4.8</span>
          </div>

          {/* Fresh Badge */}
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-orange-600 shadow backdrop-blur">
            Fresh
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative -mt-6 rounded-t-3xl bg-white p-6">
          {/* Title */}
          <h2 className="line-clamp-1 text-2xl font-bold text-gray-900">
            {foods.title}
          </h2>

          {/* Description */}
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
            Freshly prepared using quality ingredients and crafted to deliver
            incredible flavor in every bite.
          </p>

          {/* Info */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
              ⏱ 20 min
            </span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              🍴 Healthy
            </span>
          </div>

          {/* Divider */}
          <div className="my-2 h-px bg-gray-100" />

          {/* Quantity + Add */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleQuantity("decrement")}
                className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 text-lg font-bold transition hover:bg-orange-500 hover:text-white cursor-pointer"
              >
                −
              </button>

              <span className="h-6 w-6 text-center text-lg font-bold">
                {cartQuantity}
              </span>

              <button
                onClick={() => handleQuantity("increment")}
                className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 text-lg font-bold transition hover:bg-orange-500 hover:text-white cursor-pointer"
              >
                +
              </button>
            </div>

            <button
              onClick={() => addItem(foods)}
              className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-5 py-1 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-300 cursor-pointer"
            >
              Add
            </button>
          </div>

          {/* Added Message */}
          <div className=" h-5">
            {added && (
              <p className="animate-pulse text-sm font-medium text-green-600">
                ✓ Added to cart
              </p>
            )}
          </div>

          {/* View Button */}
          <button
            onClick={() => handleClick(foods.id)}
            className="mt-2 w-full rounded-xl border-2 border-orange-500 py-2 font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
          >
            View Recipe
          </button>
        </div>
      </div>
    </Reveal>
  );
};

export default FoodCard;
