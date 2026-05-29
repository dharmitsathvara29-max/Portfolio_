function Projects() {

  const projects = [

    {
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",

      title: "BMI Calculator",

      desc:
        "A React BMI Calculator that calculates body mass index instantly using height and weight inputs.",

      github:
        "https://github.com/dharmitsathvara29-max/BMICalculator"
    },

    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",

      title: "Employee Payroll System",

      desc:
        "A payroll management system to manage employee salary records and calculations efficiently.",

      github:
        "https://github.com/dharmitsathvara29-max/EmployeePayrollSystem"
    },

    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

      title: "Traveler Explorer",

      desc:
        "A travel website UI built using React and Tailwind CSS to explore beautiful destinations.",

      github:
        "https://github.com/dharmitsathvara29-max/Recent-Searches-Tracker-HTML-CSS-JS"
    }

  ];
   const projectCard =
  "bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden hover:border-sky-400 hover:-translate-y-2 transition duration-300";

const buttonClass =
  "bg-sky-500 px-6 py-3 rounded-lg hover:bg-sky-600 transition";
  return (

    <section
      id="projects"
      className="bg-black text-gray-100 px-6 md:px-20 py-24"
    >

      {/* HEADING */}
      <h1 className="text-4xl md:text-5xl font-bold mb-16">

  My <span className="text-sky-400">Projects</span>

      </h1>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <div
            key={index}
            className={projectCard}
          >

            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="h-[220px] w-full object-cover"
            />

            {/* CONTENT */}
            <div className="p-6">

              {/* TITLE */}
              <h2 className="text-2xl font-bold mb-4">

                {project.title}

              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-7 mb-8">

                {project.desc}

              </p>

              {/* BUTTON */}
              <div className="flex justify-center">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >

                  <button className={buttonClass}>

                    View on GitHub

                  </button>

                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* MORE PROJECTS BUTTON */}
      <div className="flex justify-center mt-12">
        <a href="https://github.com/dharmitsathvara29-max" target="_blank" rel="noreferrer" aria-label="More projects on GitHub">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center gap-3 transition-shadow shadow-md">
            <span>More Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </a>
      </div>

    </section>

  );
}

export default Projects;