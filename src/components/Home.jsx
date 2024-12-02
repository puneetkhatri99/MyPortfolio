import React from "react";
import HeroImage from "../assets/profile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center mb-4">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I'm a Full Stack Developer
          </h2>
          <p className=" py-4 max-w-md">
          Hi there! I’m PUNEET SEHGAL, a passionate and dedicated web developer with a strong ability to quickly learn and adapt to new technologies in the fast-paced world of web development. My curiosity and drive to stay ahead of the curve have allowed me to gain expertise in modern frameworks, tools, and best practices.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
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
