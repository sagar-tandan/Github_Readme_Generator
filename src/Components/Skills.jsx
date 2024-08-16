import React, { useContext, useState } from "react";
import { AllContext } from "../Context/context";

const programming = [{}];

const Skills = () => {
  const [search, setSearch] = useState("");
  const { allData, setAllData } = useContext(AllContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
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
            onChange={(e) => handleChange(e)}
          />
          {search === "" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
      </div>
    </div>
  );
};

export default Skills;
