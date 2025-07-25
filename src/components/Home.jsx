import HeroImage from "../assets/profile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
       className="pt-20 h-[calc(100vh-80px)] w-full bg-gradient-to-b from-gray-800 to-black text-white
             dark:from-gray-100 dark:to-gray-300 dark:text-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-[calc(100vh-80px)] px-4 md:gap-16 lg:gap-20">

        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            I'm a Full Stack Developer
          </h2>
          <p className="py-4 max-w-md mx-auto md:mx-0 text-gray-300 text-lg dark:text-gray-700">
            I’m Puneet Sehgal, a passion-driven full-stack web developer with a strong foundation in the MERN stack and a growing passion for AI and automation. I specialize in building fast, responsive, and user-friendly web applications using modern tools like React, Node.js, and Tailwind CSS.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mx-auto md:mx-0 dark:from-blue-600 dark:to-purple-600"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:flex justify-center items-center w-full md:w-auto  md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-3/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;