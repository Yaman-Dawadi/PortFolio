import React from "react";
import html from "../../assets/tech_logo/html.png";
import css from "../../assets/tech_logo/css.png";
import c from "../../assets/tech_logo/c.png";
import cpp from "../../assets/tech_logo/cpp.png";
import javascript from "../../assets/tech_logo/javascript.png";
import tailwindcss from "../../assets/tech_logo/tailwindcss.png";
import vscode from "../../assets/tech_logo/vscode.png";
import reactjs from "../../assets/tech_logo/reactjs.png"; // Corrected path
import github from "../../assets/tech_logo/github.png";
import mysql from "../../assets/tech_logo/mysql.png";

const skilll = [
  {
    skills: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "C", logo: c },
      { name: "CPP", logo: cpp },
      { name: "Java Script", logo: javascript },
      { name: "TailwindCSS", logo: tailwindcss },
      { name: "VsCode", logo: vscode },
      { name: "React Js", logo: reactjs },
      { name: "GitHub", logo: github },
      { name: "MySql", logo: mysql },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-[12vw] md:px-[7vw] lg:px-[15vw]">
      <div className="text-center mb-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab?
          Doloremque necessitatibus explicabo deserunt ullam minus? Deleniti
          placeat asperiores nobis amet recusandae voluptates perspiciatis
          molestias nam optio voluptas, at quia.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 lg:gap-5 py-10 justify-between">
        {
          skilll.map((category) => (
            <div className="bg-gray-900 backdrop-blur-md px-6 py-8 sm:py-8 mb-10 w-full rounded-2xl border border-white">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-10 text-center underline underline-offset-8">
                Tech <span className="text-yellow-300">Stack</span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-5 gap-x-10 w-full">
                {
                  category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-center space-x-2 border-2 border-gray-700 rounded-3xl py-2 px-2 text-center"
                    >
                      <img src={skill.logo} alt={skill.name} className="h-10" />
                      <span className="text-white text-sm">{skill.name}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Skills;