import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const proof = [
  {
    name: "TryHackMe",
    detail:
      "166 rooms completed, including the Jr Penetration Tester path. Top 2% of users.",
    href: "https://tryhackme.com/p/WissemJderi",
  },
  {
    name: "Pwnfolio",
    detail:
      "The CTF writeups I publish, on the platform I built to publish them.",
    href: "https://pwnfolio.vercel.app/",
  },
];

const Security = ({ sectionStyle, titleStyle }) => {
  return (
    <section id="Security" className={sectionStyle}>
      <h2 className={titleStyle}>Security:</h2>

      <p className="mb-7 max-w-2xl leading-relaxed text-gray-200">
        Outside of building, most of my time goes into web security — learning
        how applications get broken into and why. It is the same skill from the
        other direction: reading a lot of broken authorization logic is a fast
        way to learn what good authorization logic looks like.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {proof.map(({ name, detail, href }) => (
          <Link
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-sm border border-white/5 bg-[#3a3a35] p-6 transition-colors hover:border-[#ddddc3]/40"
          >
            <h3 className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#ddddc3]">
              {name}
              <FaArrowRight
                size={11}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {detail}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Security;
