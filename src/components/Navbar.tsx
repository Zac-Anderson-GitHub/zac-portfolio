import { scrollIntoView } from "../utils/scrollIntoView";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center gap-8">
      <button
        className="text-white cursor-pointer"
        onClick={(e) => {
          scrollIntoView(e, "about");
        }}
      >
        About Me
      </button>
      <button
        className="text-white cursor-pointer"
        onClick={(e) => {
          scrollIntoView(e, "services");
        }}
      >
        Services
      </button>
      <button
        className="text-white cursor-pointer"
        onClick={(e) => scrollIntoView(e, "projects")}
      >
        Projects
      </button>
      <button
        className="text-white cursor-pointer"
        onClick={(e) => scrollIntoView(e, "skills")}
      >
        Skills
      </button>
    </div>
  );
}
