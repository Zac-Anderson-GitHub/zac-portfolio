🔥 One-Page Hybrid Portfolio Structure

1. Hero Section
   Name, dev title ("Frontend Developer / Freelancer"), short value prop
   ➡ e.g. "I build fast, clean websites for startups, agencies & small businesses."
2. About Me / Bio
   Short paragraph about your journey, skills, what you’re into
   ➡ Use a friendly tone that still shows competence
3. Services (for freelance clients)
   Small cards or icons like:
   ✅ Website fixes & updates
   ✅ Shopify/Landing pages
   ✅ Custom components in React
   ✅ Speed improvements
4. Projects / Portfolio
   Showcase Scrimba projects (with short writeups)
   ➡ Add GitHub + Live demo links
   ➡ You can redesign or polish a couple to look client-ready
5. Tech Stack / Skills
   React, JavaScript, TypeScript, HTML, CSS, Tailwind (once you learn it)
6. Testimonials (if any)
   Even 1–2 from classmates, your brother, a fake “test” client works for now
7. Contact / Hire Me
   Contact form or link to email
   ➡ Bonus: Add Calendly if you want bookings

export default function Portfolio() {
return (

<div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
<div className="max-w-screen-sm mx-auto p-6 space-y-10">

        {/* Hero Section */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Zac Anderson</h1>
          <p className="text-lg text-gray-600">
            Frontend Developer & Freelancer – React / JavaScript / CSS
          </p>
        </header>

        {/* About Me */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p>
            Self-taught developer passionate about clean, responsive UI. Currently learning Tailwind and exploring React-based web apps. Looking for junior dev roles and freelance opportunities helping businesses with landing pages, ecommerce tweaks, and modern frontend solutions.
          </p>
        </section>

        {/* Services */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Services</h2>
          <ul className="list-disc list-inside">
            <li>Website fixes and updates</li>
            <li>Shopify tweaks & page styling</li>
            <li>Landing page design & build</li>
            <li>React component setup</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Add to Cart App</h3>
              <p className="text-sm text-gray-600">
                A responsive shopping list built with JavaScript and Firebase.
              </p>
              <a href="#" className="text-blue-500">View Live</a> | <a href="#" className="text-blue-500">GitHub</a>
            </div>
            <div>
              <h3 className="font-medium">Color Scheme Generator</h3>
              <p className="text-sm text-gray-600">
                React app using color API to generate palette ideas.
              </p>
              <a href="#" className="text-blue-500">View Live</a> | <a href="#" className="text-blue-500">GitHub</a>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Skills</h2>
          <p>React, JavaScript, TypeScript, HTML, CSS, Git, Firebase, Vite, Tailwind (learning)</p>
        </section>

        {/* Contact */}
        <footer className="text-center space-y-1">
          <h2 className="text-xl font-semibold">Get In Touch</h2>
          <p>Email me at: <a href="mailto:zac@example.com" className="text-blue-500">zac@example.com</a></p>
        </footer>
      </div>
    </div>

);
}
