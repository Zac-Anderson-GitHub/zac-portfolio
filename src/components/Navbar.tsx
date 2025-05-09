import { scrollIntoView } from "../utils/scrollIntoView";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center gap-8">
      <button
        className="text-white cursor-pointer"
        onClick={() => {
          scrollIntoView("about");
        }}
      >
        About Me
      </button>
      <button
        className="text-white cursor-pointer"
        onClick={() => {
          scrollIntoView("services");
        }}
      >
        Services
      </button>
      <button
        className="text-white cursor-pointer"
        onClick={() => scrollIntoView("projects")}
      >
        Projects
      </button>
      <button
        className="text-white cursor-pointer"
        onClick={() => scrollIntoView("skills")}
      >
        Skills
      </button>
    </div>
  );
}
