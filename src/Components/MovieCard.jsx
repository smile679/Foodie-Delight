import { useNavigate } from "react-router-dom";
import Reveal from "./Reveal";

const MovieCard =({ foods})=>{
  const navigate = useNavigate();

  function handleClick(id){

     navigate(`/ingredient/${id}`)
  }

  return (
    <Reveal>
      <div className="card">
      <img src={foods?.image} alt={foods.title} className="image" />
      <div className="w-full flex flex-col items-center py-3">
        <p className="text-gray-500">{foods.title}</p>
        <button className="button" onClick={()=>{ handleClick(foods.id)}}> Get Recipe</button>
      </div>
    </div>
    </Reveal>
  )
}

export default MovieCard;