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
        I'm <span className="font-bold">Wissem</span>, a self-taught developer
        who sees programming as more than just writing code;{" "}
        <span className="font-bold">
          it's a way to bring clarity to complexity and turn ideas into tangible
          products
        </span>
        . I believe that software should serve a purpose, be elegant, and have
        clear intention, quietly improving life without creating unnecessary
        noise.
      </p>
      <p className="text-gray-200 leading-relaxed mb-6">
        I strive to create tools that are simple, precise, and enduring—products
        that reflect thought rather than trend.
        <span className="font-bold">
          I prefer elegance over excess, intention over impulse, and meaningful
          experiences over flashy appearances.
        </span>
        Every line of code, every feature, is an opportunity to craft something
        that lasts and makes a subtle but significant difference.
      </p>
      <p className="text-gray-200 leading-relaxed">
        I view development as both a <span className="font-bold">craft</span>{" "}
        and a <span className="font-bold">discipline</span>: a space where
        <span className="font-bold"> logic meets creativity</span>, and
        curiosity meets careful execution. My work is guided by patience,
        thoughtfulness, and a desire to create things that are{" "}
        <span className="font-bold">useful, beautiful, and timeless.</span>{" "}
      </p>
    </motion.section>
  );
};

export default AboutMe;
