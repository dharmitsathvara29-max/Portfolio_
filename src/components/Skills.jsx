import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFigma,
  SiCplusplus,
  SiPython
} from "react-icons/si";

function Skills() {
    const skills = [
      { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS" },
      { icon: <FaJs className="text-[#F7DF1E]" />, name: "JavaScript" },
      { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
      { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
      { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" },
      { icon: <FaGithub className="text-[#ffffff]" />, name: "GitHub" },
      { icon: <SiCplusplus className="text-[#00599C]" />, name: "C++" },
      { icon: <SiPython className="text-[#3776AB]" />, name: "Python" },
      { icon: <SiFigma className="text-[#F24E1E]" />, name: "Figma" }
    ];

    const cardClass =
      "bg-white/5 border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center hover:shadow-lg hover:border-indigo-400 transform transition-all duration-300 backdrop-blur-sm";

    return (
      <section id="skills" className="bg-black text-gray-100 px-6 md:px-20 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-16">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300">Skills</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className={cardClass}>
              <div className="text-6xl mb-5">
                {skill.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-100">{skill.name}</h2>
            </div>
          ))}
        </div>
      </section>
    );
  }

  export default Skills;