import { certificates } from "./data/myCertificates";

const Certificates = ({ sectionStyle, titleStyle }) => {
  return (
    <div id="Certificates" className={`${sectionStyle}`}>
      <h2 className={`${titleStyle}`}>Certificates & Achievements:</h2>
      <p className="mb-7">
        Some of the certificates I’ve earned while learning and growing as a
        developer.
      </p>
      <div className=" grid grid-cols-1 gap-3 xl:grid-cols-2">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="bg-gray-800 p-4 rounded-2xl hover:border-white transition flex flex-col justify-between"
          >
            <div>
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
            </div>

            <a
              href={cert.link}
              target="_blank"
              className="text-blue-400 hover:text-blue-200 text-sm mt-4 inline-block transition-colors duration-300 ease-in-out"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
