import { useNavigate } from "react-router-dom";
import Reveal from "./Reveal";


const FoodCard =({ foods})=>{
  const navigate = useNavigate();
 
  function handleClick(id){
    navigate(`/ingredient/${id}`)
  }


  // function addItem(foods){
  //   setFoodArr(prevArr=>{
  //     return [...prevArr, foods]
  //   });
  //   console.log(foodArr);
  // }

  return (
    <Reveal>
      <div className="card">
      <img src={foods?.image} alt={foods.title} className="image" />
      <div className="w-full flex flex-col items-center py-3">
        <p className="text-gray-500">{foods.title}</p>
        <button className="button" onClick={()=>{ handleClick(foods.id)}}> Get Recipe</button>
        {/* <button className="button" onClick={()=>(addItem(foods))}> Order food</button> */}
      </div>
    </div>
    </Reveal>
  )
}

export default FoodCard;