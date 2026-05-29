function Navbar() {
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const navClass = "hover:text-sky-400 cursor-pointer transition duration-300";

  return (
    <nav className="bg-black text-gray-100 flex justify-between items-center px-6 md:px-16 py-6 sticky top-0 z-50">

      {/* LOGO */}
      <h1 className="text-3xl font-bold text-sky-400">Dharmit</h1>

      {/* NAV LINKS */}
      <ul className="flex gap-10 text-lg">
        {navLinks.map((link, index) => {
          const id = link.toLowerCase();
          return (
            <li key={index} className={navClass}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="block"
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>

    </nav>
  );
}

export default Navbar;