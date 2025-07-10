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
        
	I’m a passionate full-stack web developer with hands-on experience building everything from responsive websites to dynamic, real-time web applications. Specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I enjoy crafting user-friendly interfaces, scalable APIs, and smooth user experiences using technologies like Tailwind CSS, Redux Toolkit, and Socket.IO.
	What sets me apart is my obsession with learning and improving. 
        </p>

        <br />

        <p className="text-xl">
          Recently, I’ve been diving into the world of machine learning and large language models, experimenting with tools like Hugging Face Transformers, LangChain, and LLMs like LLaMA. I’m particularly excited about combining my MERN expertise with AI to build smarter, more interactive web experiences.
	Whether I’m optimizing performance, integrating complex APIs, or exploring the latest ML frameworks, I’m always pushing myself to deliver solutions that are fast, clean, and impactful.
        </p>
      </div>
    </div>
  );
};

export default About;
