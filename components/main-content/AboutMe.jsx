import { motion } from "framer-motion";
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
      <p className="text-gray-200 leading-relaxed mb-6">
        I'm <span className="font-bold">Wissem</span>, a{" "}
        <span className="font-bold">20-year-old self-taught developer from Tunisia</span>.
      </p>
      <p className="text-gray-200 leading-relaxed mb-6">
        I got into programming because I liked the idea of turning an idea into
        something real — something you can hand to thousands of people at almost no
        cost. That's still what excites me about it. Not the tools, not the trends,
        but the fact that a{" "}
        <span className="font-bold">
          well-built piece of software can genuinely make someone's life a little easier
        </span>
        . That idea hasn't gotten old.
      </p>
      <p className="text-gray-200 leading-relaxed mb-6">
        I work <span className="font-bold">systematically and deliberately</span>. I
        care about understanding things properly before moving forward, and I'd rather
        go slow and get it right than rush through and leave a mess behind. That
        approach shows up in how I learn, how I write code, and how I think about
        problems.
      </p>
      <p className="text-gray-200 leading-relaxed mb-6">
        I'm not interested in building things that are flashy or complicated for their
        own sake. I'm drawn to{" "}
        <span className="font-bold">problems that have real, direct impact</span> —
        tools that remove friction, simplify decisions, or give people back a bit of
        their time. If software isn't making something genuinely better, what's the point?
      </p>
      <p className="text-gray-200 leading-relaxed">
        I'm currently <span className="font-bold">open to work</span> — frontend,
        backend, or full-stack. I'm looking to contribute to projects that are worth
        building, work with people who take their craft seriously, and keep getting
        better at what I do. If that sounds like a fit,{" "}
        <span className="font-bold">let's talk.</span>
      </p>
    </motion.section>
  );
};

export default AboutMe;

