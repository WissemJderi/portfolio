"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaAward,
  FaBriefcase,
  FaCode,
  FaFolderOpen,
  FaGithub,
  FaLinkedin,
  FaSearch,
  FaUser,
  FaPenNib,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { useRouter } from "next/navigation";

const CommandPalette = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const commands = useMemo(
    () => [
      {
        id: "My Projects",
        icon: <FaFolderOpen />,
        action: "scroll",
        keywords: "projects work portfolio",
      },
      {
        id: "About Me",
        icon: <FaUser />,
        action: "scroll",
        keywords: "about intro who story",
      },
      {
        id: "Tech I Use",
        icon: <FaCode />,
        action: "scroll",
        keywords: "tech stack skills tools languages",
      },
      {
        id: "Open to Work",
        icon: <FaBriefcase />,
        action: "scroll",
        keywords: "hire contact job role available work",
      },
      {
        id: "Certificates",
        icon: <FaAward />,
        action: "scroll",
        keywords: "certificates achievements certs",
      },
      {
        id: "Blog",
        icon: <FaPenNib />,
        action: "route",
        href: "/blog",
        keywords: "blog posts writing journal notes",
      },
      {
        id: "Email me",
        icon: <MdEmail />,
        action: "link",
        href: "mailto:wissemjderi@outlook.com",
        keywords: "mail contact email inbox",
      },
      {
        id: "GitHub",
        icon: <FaGithub />,
        action: "link",
        href: "https://github.com/WissemJderi",
        keywords: "github code repos",
      },
      {
        id: "LinkedIn",
        icon: <FaLinkedin />,
        action: "link",
        href: "https://www.linkedin.com/in/wissem-jderi-a15765386/",
        keywords: "linkedin profile network",
      },
      {
        id: "View resume",
        icon: <IoDocumentText />,
        action: "link",
        href: "/resume.pdf",
        keywords: "resume cv pdf",
      },
    ],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.id} ${c.keywords}`.toLowerCase().includes(q),
    );
  }, [commands, query]);

  const run = (command) => {
    if (command.action === "scroll") {
      const el = document.getElementById(command.id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (command.action === "route") {
      router.push(command.href);
    } else if (command.href.startsWith("mailto:")) {
      window.location.href = command.href;
    } else {
      window.open(command.href, "_blank", "noopener,noreferrer");
    }
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((o) => !o);
        return;
      }
      if (!isOpen) return;
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (filtered.length > 0) {
          setActiveIndex((i) => (i + 1) % filtered.length);
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (filtered.length > 0) {
          setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        const command = filtered[activeIndex];
        if (command) run(command);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, filtered, activeIndex]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const el = list.querySelector(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, filtered]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-black/70 p-4 pt-[15vh]"
      onClick={() => setIsOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-sm border border-white/10 bg-[#1c1c18] shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4">
          <FaSearch className="text-gray-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="w-full bg-transparent py-4 text-sm text-white placeholder-gray-500 focus:outline-none"
          />
          <kbd className="rounded-sm border border-white/10 bg-[#3a3a35] px-1.5 py-0.5 text-xs text-gray-400">
            esc
          </kbd>
        </div>

        <ul ref={listRef} className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <li className="px-3 py-8 text-center text-sm text-gray-500">
              No results for “{query}”
            </li>
          )}
          {filtered.map((command, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={command.id} data-index={index}>
                <button
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => run(command)}
                  className={`flex w-full items-center gap-3 rounded-sm px-3 py-2.5 text-left text-sm transition-colors ${
                    isActive
                      ? "bg-[#ddddc3] text-[#111312]"
                      : "text-gray-300 hover:bg-[#3a3a35]"
                  }`}
                >
                  <span
                    className={
                      isActive ? "text-[#111312]" : "text-[#ddddc3]"
                    }
                  >
                    {command.icon}
                  </span>
                  {command.id}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-xs text-gray-500">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
