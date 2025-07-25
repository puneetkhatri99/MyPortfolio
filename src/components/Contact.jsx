
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-20
                 dark:from-gray-300 dark:to-gray-100 dark:text-gray-900" // Dark mode styles
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500
                        dark:border-gray-600"> {/* Dark mode border color */}
            Contact
          </p>
          <p className="py-6 dark:text-gray-700">Submit the form below to get in touch with me</p> {/* Dark mode text color */}
        </div>
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/aollklwb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-white placeholder-gray-400
                         dark:border-gray-600 dark:text-gray-900 dark:placeholder-gray-500" // Dark mode styles
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none text-white placeholder-gray-400
                         dark:border-gray-600 dark:text-gray-900 dark:placeholder-gray-500" // Dark mode styles
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-white placeholder-gray-400
                         dark:border-gray-600 dark:text-gray-900 dark:placeholder-gray-500" // Dark mode styles
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300
                               dark:from-blue-600 dark:to-purple-600 dark:text-white"> {/* Dark mode button styles */}
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
