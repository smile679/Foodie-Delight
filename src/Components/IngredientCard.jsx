import Reveal from "./Reveal";


const IngredientCard = ({ item }) => {
  const IMAGE_URL = `https://spoonacular.com/cdn/ingredients_250x250/${item.image}`
    
  return (
    <Reveal>
      <div className="w-full h-[250px] flex flex-col justify-between p-2 shadow-gray-600 shadow-lg rounded-xl">
      <img src={IMAGE_URL} alt={item.name} className="w-full max-h-25 object-contain rounded-lg"/>
      <div>
        <h3 className="text-green-500 font-bold my-2 text-shadow-gray-300 text-shadow-sm tracking-wide">{item.name}</h3>
        <p className="text-sm font-semibold text-orange-500 text-pretty leading-4">{item.original}</p>
      </div>
    </div>
    </Reveal>
  )
}

export default IngredientCard;