import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

function FormCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  function handleSubmit(e) {
    e.preventDefault();
    // Simple client-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', text: 'Please fill all fields before sending.' });
      return;
    }

    // simulate send (no backend) and show success
    setTimeout(() => {
      setStatus({ type: 'success', text: 'Message sent — thanks! I will get back to you.' });
      setName('');
      setEmail('');
      setMessage('');
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white/3 p-8 rounded-2xl border border-gray-800 shadow-sm">
      <label className="flex flex-col">
        <span className="text-sm text-gray-300 mb-2">Your Name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" className="bg-[#0b0b0b] border border-gray-800 p-4 rounded-xl outline-none focus:border-sky-400" />
      </label>

      <label className="flex flex-col">
        <span className="text-sm text-gray-300 mb-2">Your Email</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" className="bg-[#0b0b0b] border border-gray-800 p-4 rounded-xl outline-none focus:border-sky-400" />
      </label>

      <label className="flex flex-col">
        <span className="text-sm text-gray-300 mb-2">Message</span>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" rows={6} className="bg-[#0b0b0b] border border-gray-800 p-4 rounded-xl outline-none focus:border-sky-400" />
      </label>

      <div className="flex items-center gap-4">
        <button type="submit" className="bg-sky-600 py-3 px-6 rounded-xl text-lg hover:bg-sky-700 transition">Send Message</button>
        <p className="text-sm text-gray-400">Or email me at <span className="text-sky-400">dharmitsathvara29@gmail.com</span></p>
      </div>

      {status && (
        <div className={`mt-4 p-4 rounded-lg ${status.type === 'success' ? 'bg-green-900 border border-green-700 text-green-200' : 'bg-red-900 border border-red-700 text-red-200'}`} role="alert">
          {status.text}
        </div>
      )}
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-black text-gray-100 px-6 md:px-20 py-24">

      {/* HEADING */}
      <h1 className="text-5xl font-bold mb-12">
        Contact <span className="text-sky-400">Me</span>
      </h1>

      {/* MAIN CONTAINER - swap: form on left, info on right for emphasis */}
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT: FORM (visually primary) */}
        <FormCard />

        {/* RIGHT: Contact details & social */}
        <div className="flex flex-col gap-6">

          <div className="bg-white/3 border border-gray-800 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect 🚀</h2>
            <p className="text-gray-400 leading-7 mb-4">Feel free to contact me for collaborations, projects or internship opportunities.</p>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-sky-400 text-2xl" />
                <a href="mailto:dharmitsathvara29@gmail.com" className="text-lg hover:underline">dharmitsathvara29@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-sky-400 text-2xl" />
                <a href="tel:+918850832996" className="text-lg hover:underline">+91 8850832996</a>
              </div>
            </div>
          </div>

          <div className="bg-white/3 border border-gray-800 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">Find me on</h3>
            <div className="flex items-center gap-4">
              <a href="https://github.com/dharmitsathvara29-max" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 rounded-lg bg-[#0b0b0b] hover:bg-sky-600 transition">
                <FaGithub className="text-2xl" />
              </a>

              <a href="https://www.linkedin.com/in/dharmit-sathvara-51187b37b/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-lg bg-[#0b0b0b] hover:bg-sky-600 transition">
                <FaLinkedin className="text-2xl" />
              </a>

            </div>
            <p className="text-sm text-gray-400 mt-4">Click the GitHub or LinkedIn icon to view profiles.</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;