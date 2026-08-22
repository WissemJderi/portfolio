import { motion } from "framer-motion";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";

const lookingFor = [
  { label: "Role", value: "Backend developer" },
  { label: "Setup", value: "Remote, full-time" },
  {
    label: "Based in",
    value: "Sousse, Tunisia (UTC+1)",
    note: "Full overlap with European hours",
  },
  { label: "Available", value: "Immediately" },
];

const whatIBring = [
  "Node.js and TypeScript backends — REST APIs, auth, schema validation, and a real test suite behind them.",
  "Time spent inside a large production codebase I didn't write: NestJS and PostgreSQL, around 90k lines.",
  "A web security practice — CTFs and PortSwigger labs — which mostly shows up as care around auth, input, and access control.",
  "A project built for a real client, shipped and in use.",
];

const OpenToWork = ({ sectionStyle, titleStyle }) => {
  return (
    <section id="Open to Work" className={sectionStyle}>
      <h2 className={`${titleStyle} flex items-center gap-3`}>
        Open to Work
        <span className="relative flex h-3 w-3" title="Open to backend roles">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </span>
      </h2>

      <p className="mb-7 text-gray-200">
        I'm looking for a full-time backend role, remote.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
        <div className="rounded-sm border border-white/5 bg-[#3a3a35] p-6 sm:col-span-2">
          <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-gray-400">
            What I'm looking for
          </h3>
          <dl className="divide-y divide-white/5">
            {lookingFor.map(({ label, value, note }) => (
              <div key={label} className="py-3 first:pt-0 last:pb-0">
                <dt className="text-[11px] uppercase tracking-wider text-gray-500">
                  {label}
                </dt>
                <dd className="mt-1 text-sm text-[#ddddc3]">{value}</dd>
                {note && (
                  <dd className="mt-0.5 text-xs text-gray-500">{note}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-sm border border-white/5 bg-[#3a3a35] p-6 sm:col-span-3">
          <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-gray-400">
            What I bring
          </h3>
          <ul className="space-y-4 text-sm leading-relaxed text-gray-300">
            {whatIBring.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 bg-[#ddddc3]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-8 rounded-sm bg-[#ddddc3] p-6 text-center text-[#111312]"
      >
        <p className="mb-2 text-xl font-semibold">Let's talk</p>
        <p className="mb-5 opacity-80">
          If you're hiring, or you just want to look closer at something I've
          built, my inbox is open.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:wissemjderi@outlook.com?subject=Backend%20role"
            className="inline-flex items-center gap-2 rounded-sm bg-[#111312] px-6 py-3 font-semibold text-[#ddddc3] transition-colors duration-300 hover:bg-black"
          >
            <FaEnvelope /> Get In Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-[#111312]/30 px-6 py-3 font-semibold text-[#111312] transition-colors duration-300 hover:border-[#111312]"
          >
            <FaFileAlt /> Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default OpenToWork;
