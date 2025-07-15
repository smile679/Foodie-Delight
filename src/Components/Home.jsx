import { useEffect, useState} from "react";
import { useDebounce } from 'use-debounce';
import Search from "./Search";
import Reveal from "./Reveal";
import FoodList from "./FoodList";
import Hero from "./Hero";


const Home =()=>{
 const [food, setFood] = useState([]);
 const [query, setQuery] = useState("chicken");
 const [error, setError] = useState('')
 const [isLoading, setIsLoading] = useState(false);
 
 const [debauncedQuery] = useDebounce(query,600);
    
  async function fetchData() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = "https://api.spoonacular.com/recipes/complexSearch";
       setIsLoading(true);
      try{
        const res = await fetch(`${URL}?apiKey=${API_KEY}&query=${debauncedQuery}`);
        const data =await res.json();
        if (data.results?.length) {
            setFood(data.results);
            setError('');
            // console.log(data.results);
            // console.log(debauncedQuery)
          } else {
            setFood([]);
            setError('No results found.');
          }

      } catch(err){
        console.error(err)
        setError("Something went wrong while fetching data.")
      } finally {
        setIsLoading(false)
      }
    
  }
   useEffect(()=>{
      fetchData();
   },[ debauncedQuery ])

  return <div className="max-w-6xl m-auto flex items-center flex-col">
    <Hero/>
    <Reveal>
      <Search query={query} setQuery={setQuery}/>
    </Reveal>
    <FoodList food={food} isLoading={isLoading} error={error}/>
  </div>
}

export default Home;