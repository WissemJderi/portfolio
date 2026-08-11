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
        <span className="font-bold">
          self-taught backend developer from Tunisia
        </span>
        .
      </p>
      <p className="text-gray-200 leading-relaxed mb-6">
        I got into programming because I liked the idea of turning an idea into
        something real — something you can hand to thousands of people at almost
        no cost. That's still what excites me about it: a{" "}
        <span className="font-bold">
          well-built piece of software can genuinely make someone's life a
          little easier
        </span>
        .
      </p>
      <p className="text-gray-200 leading-relaxed mb-6">
        I work{" "}
        <span className="font-bold">systematically and deliberately</span>. I'd
        rather go slow and get it right than rush through and leave a mess
        behind — that shows up in how I learn, how I write code, and how I think
        about problems.
      </p>
      <p className="text-gray-200 leading-relaxed mb-6">
        I taught myself through{" "}
        <span className="font-bold">OSSU's computer science curriculum</span>,
        working through it the way a program is meant to be worked through — in
        order, without skipping the parts that are hard to skip.
      </p>
      <p className="text-gray-200 leading-relaxed mb-6">
        I'm not drawn to flashy or complicated for its own sake. I care about{" "}
        <span className="font-bold">
          tools that remove friction, simplify decisions, and give people back a
          bit of their time
        </span>
        . If software isn't making something genuinely better, what's the point?
      </p>
      <p className="text-gray-200 leading-relaxed">
        I'm currently <span className="font-bold">open to work</span> — backend,
        with full-stack capability. Looking to join people who take their craft
        seriously and keep getting better at what they do. If that sounds like a
        fit, <span className="font-bold">let's talk.</span>
      </p>
    </motion.section>
  );
};

export default AboutMe;
