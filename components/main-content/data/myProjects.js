import { FaPython, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiSwiper, SiTypescript } from "react-icons/si";

export const myProjects = [
  {
    projectName: "Focus Note",
    projectDescription: "A minimalist note-taking app for the terminal.",
    techStack: (
      <div className="flex flex-row gap-3 my-2">
        <FaPython color="white" size={25} />
      </div>
    ),
    imageSrc: "focus_note.webp",
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
    imageSrc: "invoiceGen_screenshot.webp",
    imageAlt: "Screenshot of the app",
    liveDemo: "https://wissem-jderi-invoice-gen.vercel.app/",
    repo: "https://github.com/WissemJderi/invoice-gen",
  },
  {
    projectName: "AL-NOUR Quran Institute",
    projectDescription:
      "A responsive landing page for an online Quran learning center.",
    techStack: (
      <div className="flex flex-row gap-3 my-2">
        <FaReact color="white" size={25} />
        <RiTailwindCssFill color="white" size={25} />
        <SiSwiper color="white" size={25} />
      </div>
    ),
    imageSrc: "alnour_screenshot.webp",
    imageAlt: "Screenshot of the AL-NOUR Quran Institute website",
    liveDemo: "https://al-nour-quran.vercel.app/",
    repo: "https://github.com/WissemJderi/al-nour",
  },
  {
    projectName: "PPS Links",
    projectDescription:
      "A responsive multi-products website with animated product cards.",
    techStack: (
      <div className="flex flex-row gap-3 my-2">
        <FaReact color="white" size={25} />
        <RiTailwindCssFill color="white" size={25} />
        <SiFramer color="white" size={25} />{" "}
      </div>
    ),
    imageSrc: "ppsLinks_screenshot.webp",
    imageAlt: "Screenshot of the PPS Links company website",
    liveDemo: "https://ppslinks.vercel.app/",
    repo: "https://github.com/WissemJderi/pps-links-official-website",
  },
  {
    projectName: "Dahech Immo",
    projectDescription:
      "A modern real estate website with responsive design, dynamic listings, and an optimized image carousel.",
    techStack: (
      <div className="flex flex-row gap-3 my-2">
        <SiTypescript color="white" size={25} />
        <FaReact color="white" size={25} />
        <RiTailwindCssFill color="white" size={25} />
        <SiFramer color="white" size={25} />{" "}
      </div>
    ),
    imageSrc: "dahechimmo_screenshot.png",
    imageAlt: "Screenshot of the PPS Links company website",
    liveDemo: "http://dahechimmo.vercel.app/",
    repo: "https://github.com/WissemJderi/hichimmo",
  },
];
