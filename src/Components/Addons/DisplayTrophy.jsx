import React, { useContext } from "react";
import { AllContext } from "../../Context/context";

const DisplayTrophy = () => {
  const { allData, setAllData } = useContext(AllContext);

  const handleThemeChange = (event) => {
    const value = event.target.value;
    setAllData((prev) => ({ ...prev, trophyTheme: value }));
  };

  const handleClick = () => {
    setAllData((prev) => ({ ...prev, displaytrophy: !prev.displaytrophy }));
  };

  const handleBorder = (e) => {
    e.preventDefault();
    setAllData((prev) => ({ ...prev, trophyBorder: !prev.trophyBorder }));
  };

  const handlebackground = (e) => {
    e.preventDefault();
    setAllData((prev) => ({
      ...prev,
      trophyBackground: !prev.trophyBackground,
    }));
  };

  return (
    <div className="mt-3 sm:mt-10 w-full flex flex-col">
      <div className="w-full flex gap-3 items-center">
        <div
          onClick={() => handleClick()}
          className="checkbox border-2 rounded-sm w-5 h-5 sm:w-6 sm:h-6 border-black bg-white flex p-[2px] sm:p-1 cursor-pointer"
        >
          <div
            className={`w-full ${
              allData.displaytrophy ? "bg-purple-600 rounded-sm " : "bg-white"
            }`}
          ></div>
        </div>
        <span className="text-lg sm:text-xl">Github Trophies</span>
      </div>
      <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />
      <div className="w-full flex sm:gap-3 justify-between sm:flex-row flex-col ">
        <div className="w-full flex gap-3 mt-5 items-center">
          <label className="text-sm md:text-lg">Theme : </label>
          <select
            onChange={(e) => handleThemeChange(e)}
            className="border-none rounded-sm px-2 text-sm md:text-lg outline-none w-[50%] sm:w-[40%] "
            name="trophyTheme"
            id="trophyTheme"
            value={allData.trophyTheme}
          >
            {[
              "default",
              "radical",
              "gruvbox",
              "tokyonight",
              "dracula",
              "onedark",
              "monokai",
              "algolia",
            ].map((color, index) => (
              <option className="bg-indigo-50" value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex sm:gap-10 sm:flex-row flex-col sm:justify-end px-2 text-sm sm:text-md">
          <button
            onClick={(e) => handleBorder(e)}
            className={`w-full sm:w-[50%] xl:w-[40%] px-5 mt-2 sm:mt-5 py-1 border-2 border-black rounded-sm ${
              allData.trophyBorder ? "bg-black text-white" : ""
            } active:scale-90 transition-all duration-300 ease-in-out`}
          >
            Border
          </button>

          <button
            onClick={(e) => handlebackground(e)}
            className={` w-full sm:w-[50%] xl:w-[40%] px-1 sm:px-5 mt-2 sm:mt-5 py-1 border-2 border-black rounded-sm ${
              allData.trophyBackground ? "bg-black text-white" : ""
            } active:scale-90 transition-all duration-300 ease-in-out`}
          >
            Background
          </button>
        </div>
      </div>

      <div className="flex gap-3 sm:mt-5 w-full items-center p-2">
        {allData.github.trim() === "" ? (
          <p className="text-red-500">Invalid github username</p>
        ) : (
          <img
            className="w-full"
            src={`https://github-profile-trophy.vercel.app/?username=${
              allData.github
            }&theme=${
              allData.trophyTheme
            }&no-frame=${!allData.trophyBorder}&no-bg=${!allData.trophyBackground}&margin-w=4`}
            alt="trophy"
          />
        )}
      </div>
    </div>
  );
};

export default DisplayTrophy;
