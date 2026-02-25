import { FaPython, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiCloudinary,
  SiExpress,
  SiFramer,
  SiMongodb,
  SiSwiper,
  SiTypescript,
} from "react-icons/si";

export const myProjects = [
  {
    projectName: "Dahech Immo",
    projectDescription:
      "Full-stack real estate platform with JWT auth, admin dashboard, REST API, MongoDB, and Cloudinary image uploads.",
    techStack: (
      <div className="flex flex-row gap-3 my-2">
        <SiTypescript color="white" size={25} />
        <FaReact color="white" size={25} />
        <RiTailwindCssFill color="white" size={25} />
        <SiFramer color="white" size={25} />
        <SiExpress color="white" size={25} />
        <SiMongodb color="white" size={25} />
        <SiCloudinary color="white" size={25} />
      </div>
    ),
    imageSrc: "dahechimmo_screenshot.png",
    imageAlt: "Screenshot of the PPS Links company website",
    liveDemo: "http://dahechimmo.vercel.app/",
    repo: "https://github.com/WissemJderi/hichimmo",
  },
  {
    projectName: "InvoiceGen",
    projectDescription:
      "Invoice generation app with dynamic item management, real-time calculations, and PDF export built with React and TypeScript.",

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
    projectName: "Focus Note",
    projectDescription:
      "A minimalist terminal-based note-taking application for efficient text management.",
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
];
