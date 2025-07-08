

const IngredientCard = ({ item }) => {
  const IMAGE_URL = `https://spoonacular.com/cdn/ingredients_250x250/${item.image}`
    
  return (
    <div className="w-full h-auto p-2 shadow-gray-600 shadow-lg rounded-xl">
      <img src={IMAGE_URL} alt={item.name} className="w-full max-h-40 object-center rounded-lg"/>
      <div>
        <h3 className="text-green-500 font-bold my-2 text-shadow-gray-300 text-shadow-sm tracking-wide">{item.name}</h3>
        <p className="text-sm text-orange-500 text-pretty">{item.original}</p>
      </div>
    </div>
  )
}

export default IngredientCard;