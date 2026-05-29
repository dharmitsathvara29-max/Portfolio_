import { useState, useEffect, useRef } from "react";
import profile from "../assets/profile.png";

function Hero() {

  const texts = [

    "Aspiring Frontend Developer",

    "React Enthusiast",

    "Building Modern Web Experiences"

  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentText((prev) =>
        prev === texts.length - 1 ? 0 : prev + 1
      );

    }, 2000);

    return () => clearInterval(interval);

  }, []);


const techIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
];

const [auraIcons, setAuraIcons] = useState([]);
const animatedIdsRef = useRef(new Set());

// ...existing code...

function startAnimationFor(el, icon) {
  if (!el || animatedIdsRef.current.has(icon.id)) return;
  animatedIdsRef.current.add(icon.id);

  // create a mid point to make the path curved
  // mid offset is a fraction of the total movement plus a perpendicular offset
  const midFactor = 0.35 + Math.random() * 0.3;
  const midX = icon.moveX * midFactor + (Math.random() - 0.5) * 120;
  const midY = icon.moveY * (midFactor + (Math.random() - 0.5) * 0.2) + (Math.random() - 0.5) * 120;

  const keyframes = [
    { transform: `translate(0px, 0px) scale(0.9)`, opacity: 0 },
    { transform: `translate(${midX}px, ${midY}px) scale(1)`, opacity: 1, offset: 0.3 },
    { transform: `translate(${icon.moveX}px, ${icon.moveY}px) scale(0.9)`, opacity: 0, offset: 1 }
  ];

  const timing = {
    duration: Math.max(1000, Math.floor(icon.duration * 1000)),
    easing: 'cubic-bezier(.22,.9,.33,1)',
    delay: Math.floor((icon.delay || 0) * 1000),
    fill: 'forwards'
  };

  const anim = el.animate(keyframes, timing);
  anim.onfinish = () => {
    // remove icon from state when animation ends
    setAuraIcons((prev) => prev.filter((a) => a.id !== icon.id));
    // allow this id to be reused/GC'd
    try {
      animatedIdsRef.current.delete(icon.id);
    } catch (e) {
      // noop
    }
  };
}

// helper to create an icon object
function createIcon(src) {
  return {
    id: Date.now() + Math.random(),
    src,
    // start near center (inside profile) so it appears from behind
    startX: 45 + Math.random() * 10,
    startY: 45 + Math.random() * 10,
    // increase movement so icons travel further out
    moveX: (Math.random() - 0.5) * 500,
    moveY: (Math.random() - 0.5) * 500,
    // longer durations so fade-out is visible
    duration: 4 + Math.random() * 3,
    // small random delay to stagger
    delay: Math.random() * 0.3
  };
}

useEffect(() => {
  // continuous spawn loop
  // spawn a few immediately so animation is visible on load
  for (let i = 0; i < 3; i++) {
    const src = techIcons[Math.floor(Math.random() * techIcons.length)];
    const icon = createIcon(src);
    setAuraIcons((prev) => {
      const next = [...prev, icon];
      return next.slice(-30);
    });
  }

  const spawnInterval = setInterval(() => {
    const src = techIcons[Math.floor(Math.random() * techIcons.length)];
    const icon = createIcon(src);
    // add new icon, cap to last 30 to avoid memory bloat
    setAuraIcons((prev) => {
      const next = [...prev, icon];
      return next.slice(-30);
    });
  }, 400);

  return () => clearInterval(spawnInterval);
}, []);
     
  return (
  <section
  id="home"
  className="hero-section relative min-h-screen bg-black text-gray-100 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 overflow-hidden"
>

  {/* LEFT SIDE */}
  <div className="z-10 max-w-[650px]">

    {/* GLASS CARD */}
    <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8">

      {/* NAME */}
      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">

        Hi, I'm{" "}

        <span className="text-sky-400">
          Dharmit
        </span>

      </h1>

      {/* ROTATING TEXT */}
      <div className="h-[80px]">

        <h2 className="text-3xl md:text-5xl font-semibold text-gray-300">

          {texts[currentText]}

          <span className="text-sky-400 animate-pulse">
            |
          </span>

        </h2>

      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-lg leading-8 mt-6 mb-8">

        
      </p>

      {/* BUTTONS */}
      {/* no action buttons in hero */}

    </div>

  </div>

  {/* RIGHT SIDE */}
{/* RIGHT SIDE */}

<div className="relative flex items-center justify-center mb-16 md:mb-0 z-10">

  {/* SOFT BACKDROP (helps icons stand out) */}
  <div
    className="absolute z-0"
    style={{
      width: 900,
      height: 900,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 45% 40%, rgba(255,255,255,0.06), rgba(99,102,241,0.02), transparent 45%)',
      filter: 'blur(100px)',
      transform: 'translate(-10%, -10%)'
    }}
  />

  {/* GLOW */}
  <div className="absolute w-[320px] h-[320px] bg-white/6 blur-3xl rounded-full"></div>

  {/* DYNAMIC AURA ICONS */}
{auraIcons.map((icon, index) => (
  <img
    key={icon.id}
    src={icon.src}
    alt="tech"
    className="aura-icon"
    style={{
      left: `${icon.startX}%`,
      top: `${icon.startY}%`,
      transform: 'translate(0,0)'
    }}
    ref={(el) => {
      if (el) startAnimationFor(el, icon);
    }}
    loading="lazy"
    onLoad={() => { /* silently ignore load events */ }}
    onError={() => { /* silently ignore load failures */ }}
  />
))}

{/* ...existing code... */}

{/* inject small CSS for the aura animation */}
<style>{`
  .aura-icon{
  position:absolute;
  width:3.5rem;
  height:3.5rem;
  pointer-events:none;
  transform:translate(0,0);
  opacity:1;
  z-index:10; /* ensure icons float above subtle background dots */
  will-change: transform, opacity;
  background:transparent;
  border-radius:0.5rem;
  display:block;
  filter: drop-shadow(0 10px 18px rgba(2,6,23,0.45));
}
@media (max-width: 640px) {
  .aura-icon{
    width:2.25rem;
    height:2.25rem;
  }
}
/* animations are started via Web Animations API in startAnimationFor() */
`}</style>

  {/* PROFILE IMAGE */}

  <div className="relative w-[780px] h-[780px] md:w-[420px] md:h-[420px] rounded-full border border-white/10 overflow-hidden z-20">
  <img
    src={profile}
    alt="profile"
    className="w-full h-full object-cover"
  />
</div>

</div>
</section>


  );
}

export default Hero;