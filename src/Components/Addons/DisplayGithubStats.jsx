import React, { useContext } from "react";
import { AllContext } from "../../Context/context";

const theme = [
  "default",
  "default_repocard",
  "transparent",
  "shadow_blue",
  "dark",
  "radical",
  "merko",
  "gruvbox",
  "onedark",
  "synthwave",
  "highcontrast",
  "dracula",
  "prussian",
  "monokai",
  "vue",
  "vue-dark",
  "shades-of-purple",
  "nightowl",
  "algolia",
  "great-gatsby",
  "darcula",
  "bear",
  "solarized-dark",
  "solarized-light",
  "chartreuse-dark",
  "graywhite",
  "vision-friendly-dark",
  "ayu-mirage",
  "midnight-purple",
  "calm",
  "flag-india",
  "omni",
  "react",
  "jolly",
  "maroongold",
  "kacho_ga",
  "outrun",
  "ocean_dark",
  "city_lights",
  "github_dark",
  "github_dark_dimmed",
  "discord_old_blurple",
  "aura_dark",
  "panda",
  "aura",
  "moltack",
  "codeSTACKr",
  "rose_pine",
  "catppuccin_latte",
  "one_dark_pro",
  "rose",
  "neon",
  "blue_navy",
  "calm_pink",
  "ambient_gradient",
];

const DisplayGithubStats = () => {
  const { allData, setAllData } = useContext(AllContext);

  const handleThemeChange = (event) => {
    const value = event.target.value;
    setAllData((prev) => ({ ...prev, statTheme: value }));
  };

  const handleClick = () => {
    setAllData((prev) => ({ ...prev, displayStat: !prev.displayStat }));
  };

  const handleBorder = (e) => {
    e.preventDefault();
    setAllData((prev) => ({ ...prev, statBorder: !prev.statBorder }));
  };

  const handlePrivateCommits = (e) => {
    e.preventDefault();
    setAllData((prev) => ({
      ...prev,
      statPrivateCommit: !prev.statPrivateCommit,
    }));
  };

  const handleLifeTimeCommits = (e) => {
    e.preventDefault();
    setAllData((prev) => ({
      ...prev,
      statLifeTimeCommit: !prev.statLifeTimeCommit,
    }));
  };

  return (
    <div className="mt-3 sm:mt-10 w-full flex flex-col">
      <div className="w-full flex gap-3">
        <div
          onClick={() => handleClick()}
          className="checkbox border-2 rounded-sm w-5 h-5 sm:w-6 sm:h-6 border-black bg-white flex p-[2px] sm:p-1 cursor-pointer"
        >
          <div
            className={`w-full ${
              allData.displayStat ? "bg-purple-600 rounded-sm " : "bg-white"
            }`}
          ></div>
        </div>
        <span className="text-lg sm:text-xl">Github Statistics</span>
      </div>
      <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />
      <div className="w-full flex gap-3 justify-between xl:flex-row flex-col">
        <div className="w-[250px] sm:w-[350px] flex gap-3 mt-5 items-center">
          <label className="text-lg">Theme : </label>
          <select
            onChange={(e) => handleThemeChange(e)}
            className="border-none rounded-sm px-2 text-lg outline-none w-[140px] sm:w-[250px]"
            name="statTheme"
            id="statTheme"
            value={allData.statTheme}
          >
            {theme.map((theme, index) => (
              <option className="bg-indigo-50" value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
        <div className="flex lg:gap-10 gap-2 flex-wrap xl:mt-5 ">
          <button
            onClick={(e) => handleBorder(e)}
            className={`w-full sm:w-[220px] px-5 py-1 border-2 border-black rounded-sm text-sm sm:text-md ${
              allData.statBorder ? "bg-black text-white" : ""
            } active:scale-90 transition-all duration-300 ease-in-out`}
          >
            Border
          </button>

          <button
            onClick={(e) => handleLifeTimeCommits(e)}
            className={`w-full sm:w-[220px] px-5 py-1 border-2 border-black rounded-sm text-sm sm:text-md ${
              allData.statLifeTimeCommit ? "bg-black text-white" : ""
            } active:scale-90 transition-all duration-300 ease-in-out`}
          >
            Lifetime Commits
          </button>

          <button
            onClick={(e) => handlePrivateCommits(e)}
            className={`w-full sm:w-[220px] px-5 py-1 border-2 border-black rounded-sm  text-sm sm:text-md ${
              allData.statPrivateCommit ? "bg-black text-white" : ""
            } active:scale-90 transition-all duration-300 ease-in-out`}
          >
            Private Commits
          </button>
        </div>
      </div>

      {allData.github.trim() === "" ? (
        <div className="flex gap-3 mt-5 w-full items-center">
          <p className="text-red-500">Invalid github username</p>
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:flex gap-4 mt-4 lg:mt-6 xl:gap-1 xl:flex-wrap xl:justify-center">
          <img
            className="w-full h-auto max-h-[250px] object-contain xl:w-[480px]"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${
              allData.github
            }&theme=${allData.statTheme}&hide_border=${!allData.statBorder}`}
            alt="streak"
          />
          <img
            className="w-full h-auto max-h-[250px] sm:w-[90%] object-contain xl:w-[430px]"
            src={`https://github-readme-stats.vercel.app/api?username=${
              allData.github
            }&theme=${
              allData.statTheme
            }&hide_border=${!allData.statBorder}&include_all_commits=${!allData.statLifeTimeCommit}&count_private=${!allData.statPrivateCommit}`}
            alt="stats"
          />
          <img
            className="w-full h-auto max-h-[250px] object-contain xl:w-[340px]"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
              allData.github
            }&theme=${
              allData.statTheme
            }&hide_border=${!allData.statBorder}&include_all_commits=${!allData.statLifeTimeCommit}&count_private=${
              allData.statPrivateCommit
            }&layout=compact`}
            alt="lang"
          />
        </div>



      )}
    </div>
  );
};

export default DisplayGithubStats;
