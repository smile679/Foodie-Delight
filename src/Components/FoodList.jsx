import FoodCard from "./FoodCard";

const FoodList = ({ food, isLoading, error }) => {
  if (isLoading) {
    return (
      <section className="py-20">
        <div className="flex justify-center items-center gap-4">
          <div className="h-12 w-12 rounded-full border-4 border-orange-500 border-t-transparent animate-spin" />
          <span className="text-xl font-semibold text-gray-700">
            Loading delicious recipes...
          </span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20">
        <p className="text-center text-lg font-semibold text-red-500">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section id="menu" className=" px-6 lg:px-12 pb-8">
      <div className="mx-auto max-w-7xl">

        {/* Food Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {food.map((foods) => (
            <FoodCard key={foods.id} foods={foods} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodList;