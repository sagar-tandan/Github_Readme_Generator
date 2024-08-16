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
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/coffeescript/coffeescript-original-wordmark.svg",
    title: "coffeescript",
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
  {
    img: "https://vectorlogo.zone/logos/erlang/erlang-official.svg",
    title: "erlang",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg",
    title: "clojure",
  },
  {
    img: "https://www.vectorlogo.zone/logos/elixir-lang/elixir-lang-icon.svg",
    title: "elixir",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
    title: "swift",
  },
  {
    img: "https://www.vectorlogo.zone/logos/nim-lang/nim-lang-icon.svg",
    title: "nim",
  },
  {
    img: "https://www.rust-lang.org/static/images/rust-logo-blk.svg",
    title: "rust",
  },
];

const frontend = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
    title: "vuejs",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    title: "react",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
    title: "Svelte",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg",
    title: "angularjs",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/backbonejs/backbonejs-original-wordmark.svg",
    title: "backbonejs",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    title: "bootstrap",
  },
  {
    img: "https://bestofjs.org/logos/vuetify.svg",
    title: "vuetify",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    title: "css3",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    title: "html5",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/pug.svg",
    title: "pug",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg",
    title: "gulp",
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    title: "sass",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    title: "redux",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
    title: "webpack",
  },
  {
    img: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
    title: "babeljs",
  },
  {
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    title: "tailwindcss",
  },
  {
    img: "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg",
    title: "materialize",
  },
  {
    img: "https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg",
    title: "bulma",
  },
];

const backend = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    title: "nodejs",
  },
  {
    img: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
    title: "spring",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    title: "express",
  },
  {
    img: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    title: "graphql",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
    title: "nginx",
  },
  {
    img: "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg",
    title: "hadoop",
  },
  {
    img: "https://openresty.org/images/logo.png",
    title: "openresty",
  },
  {
    img: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
    title: "kafka",
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

        <div className="w-full grid grid-cols-4 mt-10 gap-12">
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

      <div className="programming w-full flex flex-col mt-10">
        <h1 className="w-full text-xl">Frontend Development</h1>
        <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

        <div className="w-full grid grid-cols-4 mt-10 gap-12">
          {frontend.map((skill, index) => (
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

      {/* Backend Development */}
      <div className="programming w-full flex flex-col mt-10">
        <h1 className="w-full text-xl">Backend Development</h1>
        <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

        <div className="w-full grid grid-cols-4 mt-10 gap-12">
          {backend.map((skill, index) => (
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
