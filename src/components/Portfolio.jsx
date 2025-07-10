 import school from "../assets/school.png"
 import webgen from "../assets/webgen.jpeg"
 import chat from "../assets/chat.jpeg"

const Portfolio = () => {
  const portfolios = [
   {
    id:1,
    src: chat,
    demo: "https://connected-one.vercel.app/",
    code: "https://github.com/puneetkhatri99/CHATAPP"
   },
   {
    id:2,
    src: webgen,
    // demo: "https://webgen-frontend.vercel.app/",
    code: "https://github.com/puneetkhatri99/Website-Generator"
   },
   {
    id:3,
    src: school,
    demo: "https://shadmanenglishmediumschool.com/",
    code: "https://github.com/puneetkhatri99/CHATAPP"
   },
  ];

  return (
    <div
      name="portfolio"
      className=" w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
  {portfolios.map(({ id, src, demo, code }) => (
    <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
      <img
        src={src}
        alt="Project screenshot"
        className="rounded-md duration-200 hover:scale-105"
      />
      <div className="flex items-center justify-center">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105 bg-blue-500 text-white rounded"
        >
          Demo
        </a>
        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105 bg-gray-700 text-white rounded"
        >
          Code
        </a>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Portfolio;
