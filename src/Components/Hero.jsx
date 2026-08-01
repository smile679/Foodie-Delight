import burger from '../image/burger.jpg'
import chicken from '../image/chicken.jpg'
import mixedFood from '../image/mixedFood.jpg'
import Reveal from './Reveal'

const Hero = () =>{

  return (
    <section id="home" className="relative w-screen md:py-20 px-5 min-h-screen">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 z-8 bg-[url(./image/ethiofood.jpg)] bg-cover bg-no-repeat bg-center opacity-50
    shadow-orange-500 shadow-md"
      />
      <div className="max-w-7xl m-auto flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 md:pt-3 z-20">
          <img
            src={burger}
            alt=""
            className="w-full rounded-bl-full shadow-gray-600 shadow-lg h-[260px] object-cover"
          />
          <img
            src={chicken}
            alt=""
            className="w-full rounded-br-full md:rounded-2xl shadow-gray-600 shadow-lg h-[260px] object-cover"
          />
          <img
            src={mixedFood}
            alt=""
            className="w-full hidden md:flex rounded-br-full h-[260px] shadow-gray-600 shadow-lg object-cover"
          />
        </div>
        <div className="z-21">
          <Reveal>
            <p
              className="text-orange-950 text-4xl font-extrabold text-shadow-gray-500 text-shadow-lg
      sm:flex sm:flex-col text-center pt-2 sm:gap-1 py-10 md:py-5 sm:tracking-widest"
            >
              "One can't think well,<span> love well,</span>
              <span> sleep well,</span>if one has not dined well."
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;
