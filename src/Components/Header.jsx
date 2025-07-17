import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Context/Context';

const Header = ()=>{
  const { cart } = useUserContext();
  const navigate = useNavigate()
    
  function enterCart(){
     navigate('/cart')
  }

  return <header className='w-full fixed top-0 left-0 z-100 bg-orange-500 py-2 shadow-orange-800 shadow-xl'>
          <div className='max-w-6xl mx-auto flex justify-between'>
            <h2 className='ml-5 text-shadow-orange-800 text-shadow-lg cursor-pointer' onClick={()=>navigate('/')}>Foodie Delight</h2>
            <div className='relative mr-5 hover:scale-120 cursor-pointer' onClick={enterCart}>
              <svg className="w-10 h-10 text-white animate-pulse" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
              </svg>
              <div className='absolute -top-2 -right-3 font-semibold text-white w-4 h-4 rounded-full'>
               {cart.length}
              </div>
            </div>
          </div>
  </header>
}

export default Header;