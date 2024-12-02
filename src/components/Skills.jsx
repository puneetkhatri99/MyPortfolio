import React from "react";

import html from "../assets/HTML5.png";
import css from "../assets/css.png";
import javascript from "../assets/JavaScript.png";
import react from "../assets/react.png";
import nextjs from "../assets/Next.js.png";
import nodejs from "../assets/Node.js.png";
import mongoDB from "../assets/MongoDB.png";
import tailwind from "../assets/Tailwind.png";
import express from "../assets/Express.png"
import TS from "../assets/TypeScript.png"
import PostgresSQL from "../assets/PostgresSQL.png"
import Bash from "../assets/Bash.png"


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node Js",
      style: "shadow-green-300",
    },
    {
      id: 7,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: express,
      title: "Express Js",
      style: "shadow-black",
    },
    {
      id: 9,
      src: nextjs,
      title: "Next Js",
      style: "shadow-black",
    },
    {
      id: 10,
      src: TS,
      title: "TypeScript",
      style: "shadow-blue-700",
    },
    {
      id: 11,
      src: Bash,
      title: "BASH",
      style: "shadow-gray-700",
    },
    {
      id: 12,
      src:PostgresSQL,
      title: "PostgresSQL",
      style: "shadow-blue-800",
    },
  ];

  return (
    <div
      name="Skills"
      className="w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
