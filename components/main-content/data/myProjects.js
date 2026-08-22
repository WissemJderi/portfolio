import { FaPython, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiCloudinary,
  SiNestjs,
  SiPostgresql,
  SiExpress,
  SiFramer,
  SiMongodb,
  SiMongoose,
  SiSwiper,
  SiTypescript,
  SiVite,
  SiVitest,
  SiZod,
} from "react-icons/si";

export const myProjects = [
  {
    projectName: "Ashab Assamourah Academy",
    subTitle: "Ongoing — a production codebase I didn't write",
    projectDescription:
      "An online Quran-teaching platform with live classes, a shared whiteboard and lesson recording. I maintain the backend — bug fixes and new features in a 90,000-line NestJS and PostgreSQL codebase I didn't write.",
    techStack: (
      <div className="flex flex-row gap-3 my-2">
        <SiNestjs color="white" size={25} />
        <SiTypescript color="white" size={25} />
        <SiPostgresql color="white" size={25} />
      </div>
    ),
    imageSrc: "ashab_assamourah_screenshot.png",
    imageAlt: "Screenshot of the Ashab Assamourah Academy platform",
    liveDemo: "https://ashabassamourah-academy.cloud/",
    featured: true,
  },
  {
    projectName: "Pwnfolio",
    projectDescription:
      "A platform for publishing CTF writeups, live in production. Express 5 and strict TypeScript, JWT access/refresh over httpOnly cookies, zod schemas shared between client and server, ~100 tests.",
    techStack: (
      <div className="flex flex-row gap-3 my-2">
        <FaReact color="white" size={25} />
        <SiVite color="white" size={25} />
        <RiTailwindCssFill color="white" size={25} />
        <SiExpress color="white" size={25} />
        <SiMongoose color="white" size={25} />
        <SiZod color="white" size={25} />
        <SiVitest color="white" size={25} />
      </div>
    ),
    imageSrc: "pwnfolio_home.png",
    imageAlt: "Screenshot of the pwnfolio CTF writeup platform",
    liveDemo: "https://pwnfolio.vercel.app/",
    repo: "https://github.com/WissemJderi/pwnfolio",
    featured: true,
  },
  {
    projectName: "Dahech Immo",
    subTitle: "Built for a real client",
    projectDescription:
      "A real estate listings platform built for a client and in use today. TypeScript end to end, JWT auth, an admin dashboard, and a REST API on Express and MongoDB.",
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
    imageAlt: "Screenshot of the Dahech Immo real estate platform",
    liveDemo: "https://dahechimmo.vercel.app/",
    repo: "https://github.com/WissemJderi/hichimmo",
    featured: true,
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
        <SiVitest color="white" size={25} />
      </div>
    ),
    imageSrc: "invoiceGen_screenshot.webp",
    imageAlt: "Screenshot of the InvoiceGen invoicing app",
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
    imageAlt: "Screenshot of the Focus Note terminal app",
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
