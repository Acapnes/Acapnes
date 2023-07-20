import React from "react";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col xl:flex-row xl:space-x-10 justify-around">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-white flex flex-col space-y-4">
          <p
            className="font-bold text-6xl"
            style={{
              textShadow: "2px 2px 0px #000, -2px -2px 0px red",
            }}
          >
            Alper Senpacaci
          </p>
          <div className="flex flex-row items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <p>Turkey</p>
          </div>
          <p className="font-cairo font-semibold text-xl">
            Passionate Software Engineer with a strong background in Computer
            Engineering. From a young age, I've been fascinated by technology
            and have spent years honing my skills in various programming
            languages, web development, and game development and database
            management systems (MSSQL, MongoDB, PostgreSQL). I thrive on
            challenging projects that push the boundaries of innovation and
            creativity. My experience in building mobile apps, web applications,
            and 3D games has given me a diverse set of skills to tackle complex
            problems. Always eager to learn and explore new technologies, I take
            pride in crafting efficient and impactful solutions. Outside of
            coding, I enjoy graphic design and creating digital art. I'm excited
            to continue my journey in the tech world, contributing to
            cutting-edge projects that entertain and inspire people worldwide.
          </p>
        </div>
      </div>
      <CareerHistory />
    </div>
  );
};

export default About;

const CareerHistory = () => {
  const CareerHistory = [
    {
      subject: "Computer Science",
      at: "High School",
      as: "Student",
      yearStart: 2015,
      yearEnd: 2019,
    },
    {
      subject: "Computer Engineering",
      at: "University",
      as: "Student",
      yearStart: 2019,
      yearEnd: 2023,
    },
    {
      subject: "Intern",
      at: "Software Company",
      as: "Junior Full-Stack Developer",
      yearStart: 2021,
      yearEnd: 2021,
    },
    {
      subject: "Intern",
      at: "Software Company",
      as: "Full-Stack Developer",
      yearStart: 2022,
      yearEnd: 2023,
    },
  ];
  return (
    <div>
      <div className="hidden xl:block">
        <div className="w-full h-full flex flex-col items-end px-5 text-white">
          {CareerHistory.map((Career, CareerIndex) => (
            <div className="min-h-[4rem] flex flex-row space-x-10 whitespace-nowrap">
              <div className="flex flex-row space-x-2 items-center">
                <p className="font-bold">{Career.subject},</p>
                <p className="font-semibold text-gray-400">{Career.at}</p>
                <p className="font-semibold text-gray-400">|</p>
                <p className="font-semibold text-gray-400">{Career.as}</p>
              </div>
              <div
                className={`relative w-[0.4rem] flex items-center bg-white ${
                  CareerIndex === 0 && "rounded-t-md"
                } ${
                  CareerIndex === CareerHistory.length - 1 && "rounded-b-md"
                }`}
              >
                <div className="absolute -right-[0.45rem] w-5 h-5 rounded-xl bg-red-600"></div>
              </div>
              <div className="w-24 flex items-center">
                <p>{Career.yearStart}</p>
                <p>-</p>
                <p>{Career.yearEnd}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="block xl:hidden">
        <div className="w-full h-full flex flex-col pt-5 text-white">
          {CareerHistory.map((Career, CareerIndex) => (
            <div className="w-full flex flex-row space-x-2 justify-between ">
              <div className="flex flex-row space-x-2 items-center">
                <p className="font-bold">{Career.subject},</p>
                <p className="font-semibold text-gray-400">{Career.at}</p>
                <p className="font-semibold text-gray-400">|</p>
                <p className="font-semibold text-gray-400">{Career.as}</p>
              </div>
              <div className="flex items-center">
                <p>{Career.yearStart}</p>
                <p>-</p>
                <p>{Career.yearEnd}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
