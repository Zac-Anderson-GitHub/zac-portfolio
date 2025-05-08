import { useState } from "react";

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setFormSubmitted(true))
      .catch((error) => alert("Form submission failed. Please try again."));
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-white to-indigo-100 text-gray-800 font-sans">
      {/* 🔒 Hidden fallback form for Netlify detection */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white text-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-extrabold drop-shadow-xl">
            Zac Anderson
          </h1>
          <p className="text-2xl font-light">Frontend Developer & Freelancer</p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-white text-purple-700 font-semibold py-2 px-6 rounded-full shadow hover:bg-purple-100 transition"
          >
            Let's Connect
          </a>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
          About Me
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="/zac-profile.jpg"
            alt="Zac Anderson"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </div>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
          I'm a passionate frontend developer focused on crafting clean,
          responsive UIs. Always learning, currently diving deeper into React
          and Tailwind CSS. Available for junior roles and freelance gigs.
        </p>
      </section>

      {/* Services */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Website Fixes",
                desc: "Quick fixes, mobile optimization, general improvements.",
              },
              {
                title: "Shopify Tweaks",
                desc: "Custom styling, app installs, product page enhancements.",
              },
              {
                title: "Landing Pages",
                desc: "Modern landing pages designed to convert visitors into customers.",
              },
              {
                title: "React Components",
                desc: "Reusable components built for modern web apps.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-semibold mb-2">Add to Cart App</h3>
            <p className="text-gray-600 mb-4">
              Shopping list built with JavaScript and Firebase.
            </p>
            <a
              href="https://add-to-cart-shopping-list-firebase-db.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline"
            >
              View Live
            </a>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-semibold mb-2">
              Color Scheme Generator
            </h3>
            <p className="text-gray-600 mb-4">
              React app using color APIs to generate palettes.
            </p>
            <a
              href="https://color-scheme-generator-zac-anderson.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline"
            >
              View Live
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-purple-700">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS",
              "Git",
              "Firebase",
              "Vite",
              "TailwindCSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer + Contact Button */}
      <footer
        id="contact"
        className="py-20 bg-gradient-to-tr from-purple-700 via-pink-500 to-red-500 text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg mb-8">
          Feel free to reach out for opportunities!
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="inline-block bg-white text-purple-700 font-semibold py-3 px-6 rounded-full shadow hover:bg-purple-100 transition"
        >
          Contact Me
        </button>
      </footer>

      {/* Modal Contact Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-lg w-full relative shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            {!formSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-4 text-purple-700 text-center">
                  Contact Me
                </h3>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />

                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full p-3 border rounded"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full p-3 border rounded"
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      className="w-full p-3 border rounded"
                      rows="4"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-4 text-green-600">
                  Thanks!
                </h4>
                <p className="mb-6">Your message has been sent successfully.</p>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setFormSubmitted(false);
                  }}
                  className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
