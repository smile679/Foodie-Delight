import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IngredientCard from "./IngredientCard";
import Reveal from "./Reveal";
import { useUserContext } from "../Context/Context";

const Ingredient = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [ingredient, setIngredient] = useState({});
  const [added, setAdded] = useState(false);

  const { id } = useParams();
  const { cart, setCart } = useUserContext();

  useEffect(() => {
    if (!id) return;
    async function fetchedIngredient() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.spoonacular.com/recipes/${id}/information`;

      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        setIngredient(data);
      } catch (err) {
        console.error(err);
        setError("No results found.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchedIngredient();
  }, [id]);

  function handleAddToCart() {
    const alreadyInCart = cart.some((item) => item.id === ingredient.id);
    if (alreadyInCart) return;
    setCart((prev) => [
      ...prev,
      {
        id: ingredient.id,
        title: ingredient.title,
        image: ingredient.image,
        price: ingredient.pricePerServing,
        quantity: 1,
      },
    ]);
    setAdded(true);
  }

  if (isLoading) {
    return (
      <div className="w-full max-w-6xl py-20 px-5 flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-600 text-lg font-semibold ml-3">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-6xl py-20 px-5 text-center">
        <p className="text-red-600 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-5">
      <Reveal>
        <div className="flex flex-col items-center text-center pb-8">
          <div className="relative w-full max-w-md h-64 mb-6">
            <div className="absolute inset-0 bg-orange-500 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] -z-10 scale-95" />
            <img
              src={ingredient.image}
              alt={ingredient.title}
              className="w-full h-full object-cover rounded-2xl shadow-md"
            />
          </div>
          <p className="text-gray-500 text-sm mb-2">Recipe details</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 max-w-2xl">
            {ingredient.title}
          </h1>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full">
            {ingredient.readyInMinutes} min
          </span>
          <span className="bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full">
            Serves {ingredient.servings}
          </span>
          {ingredient.pricePerServing && (
            <span className="bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full">
              ${(ingredient.pricePerServing / 100).toFixed(2)} / serving
            </span>
          )}
          {ingredient.vegan && (
            <span className="bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">
              Vegan
            </span>
          )}
          {ingredient.vegetarian && (
            <span className="bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">
              Vegetarian
            </span>
          )}
        </div>
      </Reveal>

      <div className="flex justify-center mb-14">
        <button
          onClick={handleAddToCart}
          disabled={added}
          className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white text-sm font-semibold px-8 py-3 rounded-full transition"
        >
          {added ? "Added to cart ✓" : "Add to cart"}
        </button>
      </div>

      <div className="mb-14">
        <Reveal>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6">
            Ingredients
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-3 md:gap-5">
          {ingredient.extendedIngredients?.map((item) => (
            <IngredientCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="pb-10">
        <Reveal>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6">
            Instructions
          </h2>
        </Reveal>

        <ol className="flex flex-col gap-6">
          {ingredient.analyzedInstructions?.flatMap((instruction) =>
            instruction.steps.map((step) => {
              const equipment = step.equipment?.[0];
              const stepIngredient = step.ingredients?.[0];
              const INGREDIENT_IMAGE_URL =
                "https://spoonacular.com/cdn/ingredients_250x250";

              return (
                <Reveal key={step.number}>
                  <li className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-800 text-base leading-relaxed">
                        {step.step}
                      </p>
                      {(equipment?.image || stepIngredient?.image) && (
                        <div className="flex items-center gap-4 mt-3">
                          {equipment?.image && (
                            <img
                              src={equipment.image}
                              alt={equipment.name}
                              className="w-16 h-16 rounded-xl object-contain bg-orange-50 p-2"
                            />
                          )}
                          {stepIngredient?.image && (
                            <img
                              src={`${INGREDIENT_IMAGE_URL}/${stepIngredient.image}`}
                              alt={stepIngredient.name}
                              className="w-16 h-16 rounded-xl object-contain bg-orange-50 p-2"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </li>
                </Reveal>
              );
            }),
          )}
        </ol>
      </div>
    </div>
  );
};

export default Ingredient;
