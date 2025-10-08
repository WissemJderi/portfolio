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
    <section id="hire" className={sectionStyle}>
      <h1 className={`${titleStyle}`}>Open for Hire:</h1>
      <ul className="list-disc list-inside space-y-3 text-gray-600">
        {openForHire.map((job, index) => (
          <li
            key={index}
            className="transition-colors bg-gray-900 text-white list-none rounded-2xl py-3 px-5"
          >
            {job}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HireMe;
