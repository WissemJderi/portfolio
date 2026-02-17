const HireMe = ({ sectionStyle, titleStyle }) => {
  const openForHire = [
    "Frontend Development – React, Next.js, Tailwind",
    "Backend Development – Node.js, Express, Python",
    "Full-Stack Development – Complete Web Applications",
    "Landing Pages & UI/UX Implementation",
    "Portfolio Websites",
    "Small Web Apps / Tools",
    "Bug Fixes & Maintenance",
    "Website Deployment & Hosting",
  ];

  return (
    <section id="Hire Me" className={sectionStyle}>
      <h2 className={`${titleStyle}`}>Open for Hire:</h2>
      <p className="mb-7">
        If my skills can help your project, I’d be glad to contribute.
      </p>
      <ul className="list-disc list-inside space-y-3 text-gray-600">
        {openForHire.map((job, index) => (
          <li
            key={index}
            className="transition-colors bg-[#3a3a35] text-white list-none rounded-sm py-3 px-5"
          >
            {job}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HireMe;
