import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section id="about" className="py-13 px-[7vw] lg:px-[15vw]">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-red-300 mb-4 leading-tight">
            Yaman Dawadi
          </h2>
          <h3 className="text-3xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-green-300">
              <Typewriter
                words={[
                  "Student",
                  "Frontend Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm currently pursuing a Bachelor's degree in Computer Science and
            Information Technology (BSc.CSIT), where I've gained a solid
            grounding in computing principles and analytical problem-solving. In parallel
            with my academic studies, I’m actively exploring front-end web development,
            working with technologies like React and Tailwind CSS. I’m passionate about
            creating interactive user interfaces, applying best practices in routing and
            state management, and honing my skills through hands-on coding and debugging.
            My learning journey is fueled by persistence and attention to detail, reflecting
            a deep commitment to mastering both theoretical knowledge and practical web
            development skills.
          </p>
          <a
            href="/cv.docx"
            target="blank "
            rel="noopener noreferer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5  text-lg  font-bold transition duration-300 transform hover:text-yellow-200 bg-green-200"
          >
            Download CV
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src="../src/assets/pic.png" alt="profile" className="w-full h-full rounded-4xl object-cover" />
        </div>
      </div>
    </section>
  );
};

export default About;