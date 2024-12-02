import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I’ve successfully designed and developed several projects ranging from responsive websites to dynamic web applications. These experiences have honed my skills in HTML, CSS, JavaScript, React, Tailwind CSS, and more. I thrive in solving complex problems, building user-friendly interfaces, and creating seamless web experiences.
        </p>

        <br />

        <p className="text-xl">
        What sets me apart is my commitment to continuous learning. Whether it’s exploring cutting-edge technologies like Next.js,  Node.js, or improving performance optimization strategies, I’m always eager to enhance my skillset and deliver high-quality solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
