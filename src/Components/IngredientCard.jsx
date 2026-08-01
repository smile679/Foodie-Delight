import Reveal from "./Reveal";

const IngredientCard = ({ item }) => {
  const IMAGE_URL = `https://spoonacular.com/cdn/ingredients_250x250/${item.image}`;

  return (
    <Reveal>
      <div className="w-full min-h-[220px] flex flex-col justify-between p-3 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition">
        <div className="w-full h-24 flex items-center justify-center bg-orange-50 rounded-xl mb-3">
          <img
            src={IMAGE_URL}
            alt={item.name}
            className="max-w-full max-h-20 object-contain"
          />
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold text-sm capitalize leading-snug">
            {item.name}
          </h3>
          <p className="text-xs font-medium text-orange-500 mt-1 leading-snug">
            {item.original}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export default IngredientCard;
