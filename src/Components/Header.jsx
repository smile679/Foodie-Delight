import burger from '../image/burger.jpg'
import chicken from '../image/chicken.jpg'
import mixedFood from '../image/mixedFood.jpg'

const Header = ()=>{

  return <section className='max-w-7xl md:py-20 px-5 lg:px-10'>
    <div className="header-container mt-20">
        <div className="w-full grid grid-cols-1 order-1 md:order-none">
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 md:pt-3">
            <img src={burger} alt="" className='w-full rounded-bl-full shadow-gray-600 shadow-lg h-[250px] object-cover'/>
            <img src={chicken} alt="" className='w-full rounded-br-full md:rounded-2xl shadow-gray-600 shadow-lg h-[250px] object-cover'/>
            <img src={mixedFood} alt="" className='w-full hidden md:flex rounded-br-full h-[250px] shadow-gray-600 shadow-lg object-cover'/>
          </div>
          <div>
            <p className='para py-10 md:py-5'>
              "One cannot think well,<span> love well,</span>
            <span> sleep well,</span>if one has not dined well."</p>
          </div>
        </div>
  </div>
  </section>
}

export default Header;