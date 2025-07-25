 import school from "../assets/school.png"
 import webgen from "../assets/webgen.jpeg"
 import chat from "../assets/chat.jpeg"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chat,
      demo: "https://connected-one.vercel.app/",
      code: "https://github.com/puneetkhatri99/CHATAPP"
    },
    {
      id: 2,
      src: webgen,
      // demo: "https://webgen-frontend.vercel.app/", 
      code: "https://github.com/puneetkhatri99/Website-Generator"
    },
    {
      id: 3,
      src: school,
      demo: "https://shadmanenglishmediumschool.com/",
      // code: "https://github.com/puneetkhatri99/CHATAPP"
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20
                 dark:from-gray-100 dark:to-gray-300 dark:text-gray-900" // Dark mode styles
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500
                        dark:border-gray-600"> 
            Portfolio
          </p>
          <p className="py-6 dark:text-gray-700">Check out some of my work right here</p> 
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105
                                    dark:shadow-gray-400"> 
              <img
                src={src}
                alt="Project screenshot"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="flex items-center justify-center p-4 bg-gray-700
                              dark:bg-gray-200"> 
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-4 py-2 m-2 text-center text-white rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-200
                               dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white" 
                  >
                    Demo
                  </a>
                )}
                {code && (<a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-4 py-2 m-2 text-center text-white rounded-md bg-gray-600 hover:bg-gray-700 transition-colors duration-200
                               dark:bg-gray-400 dark:hover:bg-gray-500 dark:text-gray-900" 
                >
                  Code
                </a>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
