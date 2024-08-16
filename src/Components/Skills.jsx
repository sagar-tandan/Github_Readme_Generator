import React, { useContext, useEffect, useState } from "react";
import { AllContext } from "../Context/context";

const prograamLang = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    title: "c",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    title: "c++",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
    title: "csharp",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
    title: "go",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    title: "java",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    title: "javascript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    title: "typescript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    title: "php",
  },
  {
    img: "https://api.iconify.design/logos-perl.svg",
    title: "perl",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    title: "ruby",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg",
    title: "scala",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    title: "python",
  },
];

const Skills = () => {
  const [search, setSearch] = useState("");
  const [showText, setShowText] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const { allData, setAllData } = useContext(AllContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (skill) => {
    setSelectedSkills((prev) => {
      // Toggle skill in selectedSkills array
      if (prev.includes(skill)) {
        return prev.filter((item) => item !== skill); // Remove skill if already selected
      } else {
        return [...prev, skill]; // Add skill if not selected
      }
    });
  };

  // Update context data with selected skills
  useEffect(() => {
    setAllData((prev) => ({
      ...prev,
      programming: [selectedSkills],
    }));
  }, [selectedSkills]);

  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-1">
      <div className="title w-full flex justify-between">
        <h1 className="w-full text-2xl font-semibold">Skills</h1>
        <div className="w-[250px] border-2 border-black rounded-md flex items-center pr-2">
          <input
            className="w-[200px] m-2 border-none outline-none text-lg"
            type="text"
            name="search"
            value={search}
            placeholder="Search skills"
            onChange={handleChange}
          />
          {search === "" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          ) : (
            <svg
              onClick={() => setSearch("")}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          )}
        </div>
      </div>

      {/* Programming language */}
      <div className="programming w-full flex flex-col">
        <h1 className="w-full text-xl">Programming Languages</h1>
        <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

        <div className="w-full grid grid-cols-4 mt-10  gap-10">
          {prograamLang.map((skill, index) => (
            <div
              key={index}
              className="w-full flex gap-5 items-center oneelement"
            >
              <div
                onClick={() => handleClick(skill.title)}
                className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
              >
                <div
                  className={`w-full ${
                    selectedSkills.includes(skill.title)
                      ? "bg-purple-600 rounded-sm"
                      : "bg-white"
                  }`}
                ></div>
              </div>
              <img
                onClick={() => handleClick(skill.title)}
                onMouseEnter={() => setShowText(skill.title)}
                onMouseLeave={() => setShowText("")}
                className="w-10 h-10"
                src={skill.img}
                alt={skill.title}
              />
              <h1
                className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                  showText === skill.title ? "opacity-100" : "opacity-0"
                }`}
              >
                {skill.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
