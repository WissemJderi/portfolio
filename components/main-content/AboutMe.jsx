import { motion } from "framer-motion";

const linkStyle =
  "text-[#ddddc3] underline underline-offset-4 decoration-white/25 transition-colors hover:decoration-[#ddddc3]";

const AboutMe = ({ sectionStyle, titleStyle }) => {
  return (
    <motion.section
      id="About Me"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`${sectionStyle}`}
    >
      <h2 className={`${titleStyle}`}>About Me:</h2>

      <div className="max-w-2xl space-y-5 leading-relaxed text-gray-200">
        <p>
          I'm <span className="font-bold">Wissem</span>, a{" "}
          <span className="font-bold">self-taught backend developer</span> from
          Sousse, Tunisia.
        </p>

        <p>
          I got into programming because I liked that you can build a thing once
          and hand it to thousands of people. That part still holds up.
        </p>

        <p>
          What keeps me here is different, though. I care about{" "}
          <span className="font-bold">
            understanding what is actually happening underneath
          </span>
          , rather than gluing pieces
          together until the errors stop. I learned the hard way that "it works"
          and "I know why it works" are two different things, and that the
          difference only shows up later, when something breaks and someone has
          to understand why.
        </p>

        <p>
          So I work <span className="font-bold">slowly and deliberately</span>.
          I would rather get something right
          than get it done twice. Errors are the part I actually learn from, and
          simplicity is the part that survives.
        </p>

        <p>
          <span className="font-bold">Security is the other half of it.</span>{" "}
          Spending time on how applications
          get broken into changed how I build them: it is harder to be careless
          about auth or input handling once you have spent an evening walking
          through someone else's.
        </p>

        <p>
          Most of what I know came from building things, plus{" "}
          <a
            href="https://fullstackopen.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            Full Stack Open
          </a>
          ,{" "}
          <a
            href="https://cs50.harvard.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            CS50
          </a>{" "}
          and the{" "}
          <a
            href="https://github.com/ossu/computer-science"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            OSSU curriculum
          </a>{" "}
          along the way. There's no degree behind any of it —{" "}
          <span className="font-bold">what there is instead is public</span>:
          the repos, the deployed sites, the writeups. I work in Arabic and English, and right now most
          of my days go into Node.js, NestJS and PostgreSQL.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
