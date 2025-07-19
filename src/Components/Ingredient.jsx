import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IngredientCard from "./IngredientCard";
import Reveal from "./Reveal";



const Ingredient = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const [ingredient, setIngredient] = useState({});

  const { id } = useParams();

  useEffect(()=>{
    if (!id) return;
    async function fetchedIngredient(){
      const API_KEY = import.meta.env.VITE_API_KEY
      const URL =`https://api.spoonacular.com/recipes/${id}/information`;
      
      setIsLoading(true);
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        setIngredient(data)
        // console.log(data)
      } catch(err){
        console.error(err);
        setError('No results found.');
      } finally {
        setIsLoading(false)
      }
    }
    fetchedIngredient()
  },[id])


  return <div className="max-w-6xl py-5 px-5">
      { isLoading ? <div className= "flex justify-center items-center">
      <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-green-500 text-xl sm:text-2xl font-semibold ml-1"> Loading..</p>
      </div> : error ? <p className="text-red-600 font-semibold"> {error}</p> : 
        <div className="text-center text-pretty">
          <Reveal>
            <div className="flex items-center flex-col pb-5">
            <img src={ingredient.image} alt={ingredient.title} className="rounded-b-full shadow-gray-500 shadow-lg object-cover"/>
            <h2 className="mt-10 max-w-2xl text-orange-500 font-extrabold text-shadow-gray-500 text-shadow-2xs">{ingredient.title}</h2>
          </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <p className="text-green-500 text-xl sm:text-2xl font-semibold ml-1">Minute: {ingredient.readyInMinutes}</p>
            <p className="text-green-500 text-xl sm:text-2xl font-semibold ml-1">Servse: {ingredient.servings}</p>
            {ingredient.pricePerServing? <p className="text-green-500 text-xl sm:text-2xl font-semibold ml-1">Price: {(ingredient.pricePerServing/10).toFixed(1)}$</p>: ""}
            {ingredient.vegan? <p className="text-green-500 text-xl sm:text-2xl font-semibold ml-1">Vegan</p>: ""}
            {ingredient.vegetarian ? <p className="text-green-500 text-xl sm:text-2xl font-semibold ml-1">vegetarian</p>: ""}
          </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="py-5 sm:py-10 text-green-500 font-extrabold text-shadow-green-500/50 text-shadow-md tracking-wider">
              INGREDIENTS
              </h2>
            </Reveal>
              <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-2 md:gap-5">
                { ingredient.extendedIngredients.map((item)=>(
                  <IngredientCard item={item}/>
                ))}
              </div>
          </div>
      <div className="py-10">
        <Reveal>
          <h2 className="py-5 text-green-500 font-extrabold text-shadow-green-500/50 text-shadow-md tracking-widest">
          INSTRACTIONS
          </h2>
        </Reveal>
        <div className=" text-xl text-orange-900 font-semibold text-start">
          <ol key={Ingredient.name}>
            {ingredient.analyzedInstructions.map((items)=>
              items.steps.map((item)=>{
                let Equipment = '';
                let Ingredient = '';
                const IMAGE_URL = "https://spoonacular.com/cdn/ingredients_250x250"

                item.equipment.map((eque)=>(Equipment = eque))
                item.ingredients.map((ingre)=>(Ingredient = ingre))
                  
                return <Reveal>
                  <li>
                  {item.step}
                  <div  className="flex items-center my-5">
                 { Equipment.image?  <img src={Equipment.image} alt={Equipment.name} className="w-30 h-20 rounded-3xl object-contain mr-10" />: ''} 
                 { Ingredient.image? <img src={`${IMAGE_URL}/${Ingredient.image}`} alt={Ingredient.name} className="w-30 h-20 rounded-3xl object-contain"/> : ''}
                  </div>
                </li>
                </Reveal>
              })
            )}
          </ol>
        </div>
      </div>
    </div>
      }
  </div>
}

export default Ingredient;