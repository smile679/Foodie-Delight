import FoodCard from "./FoodCard";

const FoodList = ({ food, isLoading, error }) =>{


  return <section className="flex items-center flex-col my-10 mx-5 lg:mx-10">
    <div>
      {isLoading ? <div className= "flex justify-center items-center">
      <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-green-500 text-xl sm:text-2xl font-semibold ml-1"> Loading..</p>
      </div> : error ? <p className="text-red-600 font-semibold"> {error}</p> :
          <div className="w-full h-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10">
            {food.map((foods)=>{
              return <FoodCard key={foods.title} foods={foods}/>
            })}
           </div>
      }
    </div>
  </section>
}

export default FoodList;