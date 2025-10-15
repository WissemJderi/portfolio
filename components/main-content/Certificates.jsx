import { certificates } from "./data/myCertificates";

const Certificates = ({ sectionStyle, titleStyle }) => {
  return (
    <div className={`${sectionStyle} grid grid-cols-2 gap-2`}>
      {certificates.map((cert) => (
        <div
          key={cert.title}
          className="border border-white/20 p-4 rounded-2xl hover:border-white transition"
        >
          <img
            src={cert.logo}
            alt={cert.title}
            className={
              cert.issuer === "freeCodeCamp"
                ? "h-10 mb-3 freecodecamp-logo"
                : "h-10 mb-3"
            }
          />
          <h3 className="font-semibold text-white">{cert.title}</h3>
          <p className="text-sm text-gray-400">{cert.issuer}</p>
          <a
            href={cert.link}
            target="_blank"
            className="text-blue-400 text-sm mt-2 inline-block"
          >
            View Certificate →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Certificates;
