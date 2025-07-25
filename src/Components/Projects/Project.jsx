import React from "react";
import htmlLogo from "../../assets/tech_logo/html.png";
import reactLogo from "../../assets/tech_logo/reactjs.png";
import tailwindLogo from "../../assets/tech_logo/tailwindcss.png";

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    image: htmlLogo,
    Link: "",
    github: "",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    image: reactLogo,
    Link: "",
    github: "",
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    image: tailwindLogo,
    Link: "",
    github: "",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-24 px-[12vw] md:px-[7vw] lg:px-[15vw]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my work, demonstrating my skills and creativity.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain rounded-t-xl p-4"
              />
              <div className="p-4">
                <div className="p-6 bg-red-50">
                  <h3 className="text-xl font-bold mb-2 text-black">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex gap-4 justify-center">
                    <a href={project.link}target="_blank" rel ="noopener noreferer " className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-400 transition">Live Site</a>
                    <a href={project.link}target="_blank" rel ="noopener noreferer " className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-400 transition">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;