import { FaPython, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export const myProjects = [
  {
    projectName: "Focus Note",
    projectDescription: "A minimalist note-taking app for the terminal.",
    techStack: (
      <div className="flex flex-row gap-3 my-2">
        <FaPython color="white" size={25} />
      </div>
    ),
    imageSrc: "focus_note.png",
    imageAlt: "Screenshot of the app",
    liveDemo: "https://youtu.be/8B_Ew92C02E",
    repo: "https://github.com/WissemJderi/Focus-Note.git",
  },
  {
    projectName: "InvoiceGen",
    projectDescription: "A simple invoice generator that exports to PDF.",
    techStack: (
      <div className="flex flex-row gap-3 my-2">
        <SiTypescript color="white" size={25} />
        <FaReact color="white" size={25} />
        <RiTailwindCssFill color="white" size={25} />
      </div>
    ),
    imageSrc: "invoiceGen_screenshot.png",
    imageAlt: "Screenshot of the app",
    liveDemo: "https://wissem-jderi-invoice-gen.vercel.app/",
    repo: "https://github.com/WissemJderi/invoice-gen",
  },
];
