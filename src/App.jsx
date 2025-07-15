import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home"
import Header from "./Components/Header"
import Ingredient from "./Components/Ingredient";
import { UserProvider } from './Context/Context';
import Cart from './Cart/Cart';

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
      <main className="relative flex justify-center items-center flex-col">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ingredient/:id" element={ <Ingredient/>} />
          <Route path="/cart" element={ <Cart /> }/>
        </Routes>
      </main>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App;