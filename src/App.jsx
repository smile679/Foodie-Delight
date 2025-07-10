import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home"
import Ingredient from "./Components/Ingredient";

function App() {

  return (
    <BrowserRouter>
      <main className="max-w-7xl m-auto relative flex justify-center items-center flex-col">
      <div className='w-full fixed top-0 left-0 z-10 bg-green-500 py-3 shadow-green-800 shadow-xl'>
        <h2 className='ml-5 text-center text-shadow-green-800 text-shadow-lg'>Foodie Delight</h2>
      </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ingredient/:id" element={ <Ingredient/>} />
        </Routes>
      </main>
      </BrowserRouter>
  )
}

export default App;