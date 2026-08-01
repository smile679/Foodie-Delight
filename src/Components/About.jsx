import mixedFood from "../image/mixedFood.jpg";
import Reveal from "./Reveal";

const stats = [
  { value: "1,000+", label: "Recipes to explore" },
  { value: "3", label: "Local payment options" },
  { value: "< 2 min", label: "Average checkout time" },
];

const About = () => {
  return (
    <section id="about" className="w-screen bg-white px-5 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center md:justify-start order-2 md:order-1 h-[320px] md:h-[380px]">
          <div className="absolute left-0 top-0 w-[85%] h-[90%] bg-orange-500 rounded-[40%_60%_60%_40%/50%_40%_60%_50%]" />
          <img
            src={mixedFood}
            alt="Assortment of prepared dishes"
            className="relative z-10 w-64 sm:w-72 h-full object-cover rounded-2xl"
          />
          <div className="hidden sm:block absolute z-20 bottom-6 -right-4 bg-white rounded-xl shadow-md px-5 py-3">
            <p className="text-2xl font-extrabold text-gray-900">
              4.8<span className="text-orange-500">★</span>
            </p>
            <p className="text-[11px] text-gray-500">Average rating</p>
          </div>
        </div>

        <Reveal>
          <div className="order-1 md:order-2">
            <p className="text-gray-500 text-sm mb-3">Our story</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 mb-5">
              Made for people who{" "}
              <span className="text-orange-500">love good food</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Foodie Delight started as a simple idea — finding a great recipe
              and getting it on your table shouldn't take forever. We built a
              place to search thousands of dishes, filter by what you can
              actually eat, and check out in a way that works with how people in
              Addis Ababa actually pay.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border-l-2 border-orange-500 pl-3"
                >
                  <p className="text-xl sm:text-2xl font-extrabold text-gray-900">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
