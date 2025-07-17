import burger from '../image/burger.jpg'
import chicken from '../image/chicken.jpg'
import mixedFood from '../image/mixedFood.jpg'
import Reveal from './Reveal'

const Hero = () =>{

  return <section className='hero min-h-screen'>
        <div className='heroImg'/>
        <div className="max-w-6xl m-auto flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 md:pt-3 z-20">
            <img src={burger} alt="" className='w-full rounded-bl-full shadow-gray-600 shadow-lg h-[260px] object-cover'/>
            <img src={chicken} alt="" className='w-full rounded-br-full md:rounded-2xl shadow-gray-600 shadow-lg h-[260px] object-cover'/>
            <img src={mixedFood} alt="" className='w-full hidden md:flex rounded-br-full h-[260px] shadow-gray-600 shadow-lg object-cover'/>
          </div>
          <div className='z-21'>
            <Reveal>
              <p className='para'>
              "One cannot think well,<span> love well,</span><span> sleep well,</span>if one has not dined well."</p>
            </Reveal>
          </div>
        </div>
  </section>
}

export default Hero;
// grid grid-cols-1 order-1 md:order-none