import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer id="footer" className="w-screen bg-orange-500 px-5 pt-14 pb-8">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 mb-10">
        <div>
          <h2 className="text-white text-xl font-extrabold mb-3">
            Foodie Delight
          </h2>
          <p className="text-orange-100 text-sm leading-relaxed max-w-xs">
            Search thousands of recipes and get them on your table — fast,
            fresh, and paid the way you already pay.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold text-sm mb-3">Quick links</p>
          <div className="flex flex-col gap-2">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-orange-100 text-sm cursor-pointer hover:text-white w-fit"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="menu"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-orange-100 text-sm cursor-pointer hover:text-white w-fit"
            >
              Menu
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-orange-100 text-sm cursor-pointer hover:text-white w-fit"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-orange-100 text-sm cursor-pointer hover:text-white w-fit"
            >
              Contact
            </ScrollLink>
          </div>
        </div>

        <div>
          <p className="text-white font-semibold text-sm mb-3">Contact</p>
          <div className="flex flex-col gap-2 text-orange-100 text-sm">
            <p>Bole Road, Addis Ababa, Ethiopia</p>
            <p>+251 91 234 5678</p>
            <p>hello@foodiedelight.com</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-orange-100 text-xs">
          © {new Date().getFullYear()} Foodie Delight. All rights reserved.
        </p>
        <p className="text-orange-100 text-xs">Built by Sami</p>
      </div>
    </footer>
  );
};

export default Footer;