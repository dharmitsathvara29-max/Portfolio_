import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import profile from "../assets/profile.png";

function About() {
  return (
  <section id="about" className="bg-black text-gray-100 px-6 md:px-20 py-24">

      {/* HEADING */}
      <h1 className="text-5xl font-bold mb-16">
        About <span className="text-cyan-400">Me</span>
      </h1>

      {/* MAIN CONTAINER */}
      <div className="flex items-center justify-between gap-16">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-10 flex-1">

          {/* PROFILE IMAGE */}
          <img
            src={profile} 
            alt="profile"
            className="w-[220px] rounded-full border-4 border-sky-400"
          />

          {/* ABOUT TEXT */}
          <div>

            <p className="text-gray-300 text-lg leading-9 mb-6">
              I am a Computer Science student passionate about building
              web applications. I enjoy solving problems and learning
              modern frontend technologies.
            </p>

            <p className="text-gray-400 leading-8">
              Currently learning React, Tailwind CSS and JavaScript
              while building real-world projects.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8 flex-1">

          {/* EDUCATION CARD */}
          <div className="bg-white/3 border border-gray-700 p-8 rounded-2xl backdrop-blur-sm">

            <div className="flex items-center gap-4 mb-4">

              <FaGraduationCap className="text-cyan-400 text-2xl" />

              <h2 className="text-2xl font-semibold">
                Education
              </h2>

            </div>

            <p className="text-gray-300 text-lg">
              B.Tech in Computer Science
            </p>

            <p className="text-gray-500 mt-2">
              2025 - 2029
            </p>

          </div>

          {/* LOCATION CARD */}
          <div className="bg-white/3 border border-gray-700 p-8 rounded-2xl backdrop-blur-sm">

            <div className="flex items-center gap-4 mb-4">

              <FaLocationDot className="text-cyan-400 text-2xl" />

              <h2 className="text-2xl font-semibold">
                Location
              </h2>

            </div>

            <p className="text-gray-300 text-lg">
              Mumbai, India
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;