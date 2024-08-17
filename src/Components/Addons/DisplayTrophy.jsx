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
    <div className="mt-10 w-full flex flex-col">
      <div className="w-full flex gap-3">
        <div
          onClick={() => handleClick()}
          className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
        >
          <div
            className={`w-full ${
              allData.displaytrophy ? "bg-purple-600 rounded-sm " : "bg-white"
            }`}
          ></div>
        </div>
        <span className=" text-xl">Github Trophies</span>
      </div>
      <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />
      <div className="w-full flex gap-3 justify-between">
        <div className="w-[350px] flex gap-3 mt-5 items-center">
          <label className="text-lg">Theme : </label>
          <select
            onChange={(e) => handleThemeChange(e)}
            className="border-none rounded-sm px-2 text-lg outline-none w-[250px]"
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
              <option className="bg-indigo-50" value={color}>{color}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-10">
          <button
            onClick={(e) => handleBorder(e)}
            className={`w-[150px] px-5 mt-5 py-1 border-2 border-black rounded-sm ${
              allData.trophyBorder ? "bg-black text-white" : ""
            } active:scale-90 transition-all duration-300 ease-in-out`}
          >
            Border
          </button>

          <button
            onClick={(e) => handlebackground(e)}
            className={`w-[150px] px-5 mt-5 py-1 border-2 border-black rounded-sm ${
              allData.trophyBackground ? "bg-black text-white" : ""
            } active:scale-90 transition-all duration-300 ease-in-out`}
          >
            Background
          </button>
        </div>
      </div>

      <div className="flex gap-3 mt-5 w-full items-center p-2">
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
