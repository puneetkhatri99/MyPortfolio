import React , {useState} from "react";

const About = () => {
  const aboutText = `I’m a passionate full-stack web developer with hands-on experience building everything from responsive websites to dynamic, real-time web applications. Specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I enjoy crafting user-friendly interfaces, scalable APIs, and smooth user experiences using technologies like Tailwind CSS, Redux Toolkit, and Socket.IO.
  What sets me apart is my obsession with learning and improving.

  Recently, I’ve been diving into the world of machine learning and large language models, experimenting with tools like Hugging Face Transformers, LangChain, and LLMs like LLaMA. I’m particularly excited about combining my MERN expertise with AI to build smarter, more interactive web experiences.
  Whether I’m optimizing performance, integrating complex APIs, or exploring the latest ML frameworks, I’m always pushing myself to deliver solutions that are fast, clean, and impactful.`;

  const [elevatorPitch, setElevatorPitch] = useState('');
  const [loadingPitch, setLoadingPitch] = useState(false);
  const [pitchError, setPitchError] = useState('');

  const generateElevatorPitch = async () => {
    setLoadingPitch(true);
    setPitchError('');
    setElevatorPitch(''); // Clear previous pitch

    const prompt = `Based on the following text about a full-stack web developer, generate a concise and impactful elevator pitch (2-3 sentences max) that highlights their key skills and passion for AI/ML:

    "${aboutText}"

    Elevator Pitch:`;

    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });

    const payload = { contents: chatHistory };
    const apiKey = ""; // Leave this as-is; Canvas will automatically provide it.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setElevatorPitch(text);
      } else {
        setPitchError('Failed to generate pitch. Please try again.');
        console.error('Unexpected API response structure:', result);
      }
    } catch (error) {
      setPitchError('Error connecting to the API. Please check your network or try again later.');
      console.error('API call error:', error);
    } finally {
      setLoadingPitch(false);
    }
  };

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-20
                 dark:from-gray-300 dark:to-gray-100 dark:text-gray-900" // Dark mode styles
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500
                        dark:border-gray-600"> {/* Dark mode border color */}
            About
          </p>
        </div>
        <p className="text-xl mt-8 md:mt-12 leading-relaxed
                      dark:text-gray-700"> {/* Dark mode text color */}
          {aboutText.split('\n\n')[0]} {/* Display first paragraph */}
        </p>
        <br />
        <p className="text-xl leading-relaxed
                      dark:text-gray-700"> {/* Dark mode text color */}
          {aboutText.split('\n\n')[1]} {/* Display second paragraph */}
        </p>
      </div>
    </div>
  );
};

export default About;
