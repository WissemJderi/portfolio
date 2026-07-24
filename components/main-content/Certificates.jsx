import { certificates } from "./data/myCertificates";

const CertGrid = ({ items }) => (
  <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
    {items.map((cert) => (
      <div
        key={cert.title}
        className="flex flex-col justify-between rounded-sm bg-[#3a3a35] p-4 transition hover:border-white"
      >
        <div>
          <img
            src={cert.logo}
            alt={cert.title}
            className={
              cert.issuer === "freeCodeCamp"
                ? "freecodecamp-logo mb-3 h-10"
                : "mb-3 h-10"
            }
          />

          <h3 className="font-semibold text-white">{cert.title}</h3>
          <p className="text-sm text-gray-400">{cert.issuer}</p>
        </div>

        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-white transition-colors duration-300 ease-in-out hover:text-blue-200"
        >
          View Certificate →
        </a>
      </div>
    ))}
  </div>
);

const Certificates = ({ sectionStyle, titleStyle }) => {
  const programming = certificates.filter((c) => c.category === "programming");

  const cybersecurity = certificates.filter(
    (c) => c.category === "cybersecurity",
  );

  return (
    <div id="Certificates" className={sectionStyle}>
      <h2 className={titleStyle}>Certificates & Achievements:</h2>

      <p className="mb-7">
        Some of the certificates I’ve earned while learning and growing as a
        developer.
      </p>

      <h3 className="mb-3 text-lg font-semibold text-white">Programming</h3>
      <CertGrid items={programming} />

      <h3 className="mb-3 mt-8 text-lg font-semibold text-white">
        Cybersecurity
      </h3>
      <CertGrid items={cybersecurity} />
    </div>
  );
};

export default Certificates;
