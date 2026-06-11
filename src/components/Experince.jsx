const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Liang Tuang Technologies Pvt Ltd",
      duration: "Jun 2024 - Aug 2024",
      description: [
        "Built a full-stack AI-powered resume parser using Flask (backend), React (frontend), and MySQL (database): integrated OpenAI API to support parsing of PDF, DOCX, and TXT resumes.",
        "Developed an admin dashboard for managing parsed resumes and user profiles with advanced filtering, analytics, and creating resumes with multiple predefined templates.",
        "Implemented web scraping pipelines using Selenium and Selenium Wire to collect 5000+ job listings with complete metadata for AI model training.",
        "Conducted research and development on machine learning workflows, contributing to the prototyping of internal AI tools for recommendation model.",
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20
                 dark:from-gray-100 dark:to-gray-300 dark:text-gray-900"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500
                        dark:border-gray-600">
            Experience
          </p>
        </div>

        <div className="mt-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 p-6 rounded-lg shadow-md bg-gray-700
                                        dark:bg-gray-200 dark:text-gray-900 dark:shadow-gray-400">
              <h3 className="text-3xl font-bold text-cyan-400 mb-2
                             dark:text-blue-600">{exp.title}</h3>
              <p className="text-xl font-semibold text-gray-300 mb-1
                            dark:text-gray-700">{exp.company}</p>
              <p className="text-lg text-gray-400 mb-4
                            dark:text-gray-600">{exp.duration}</p>
              <ul className="list-disc list-inside text-lg space-y-2 text-gray-200
                             dark:text-gray-800">
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience