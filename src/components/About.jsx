

const About = () => {
  const aboutText = `I’m a passionate full-stack web developer with hands-on experience building everything from responsive websites to dynamic, real-time web applications. Specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I enjoy crafting user-friendly interfaces, scalable APIs, and smooth user experiences using technologies like Tailwind CSS, Redux Toolkit, and Socket.IO.
  What sets me apart is my obsession with learning and improving.

  Recently, I’ve been diving into the world of machine learning and large language models, experimenting with tools like Hugging Face Transformers, LangChain, and LLMs like LLaMA. I’m particularly excited about combining my MERN expertise with AI to build smarter, more interactive web experiences.
  Whether I’m optimizing performance, integrating complex APIs, or exploring the latest ML frameworks, I’m always pushing myself to deliver solutions that are fast, clean, and impactful.`;

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-20
                 dark:from-gray-300 dark:to-gray-100 dark:text-gray-900" 
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500
                        dark:border-gray-600"> 
            About
          </p>
        </div>
        <p className="text-xl mt-8 md:mt-12 leading-relaxed
                      dark:text-gray-700"> 
          {aboutText.split('\n\n')[0]} 
        </p>
        <br />
        <p className="text-xl leading-relaxed
                      dark:text-gray-700"> 
          {aboutText.split('\n\n')[1]} 
        </p>
      </div>
    </div>
  );
};

export default About;
