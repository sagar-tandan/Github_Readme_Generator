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
  "ambient_gradient"
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
    <div className="mt-10 w-full flex flex-col">
      <div className="w-full flex gap-3">
        <div
          onClick={() => handleClick()}
          className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
        >
          <div
            className={`w-full ${
              allData.displayStat ? "bg-purple-600 rounded-sm " : "bg-white"
            }`}
          ></div>
        </div>
        <span className=" text-xl">Github Statistics</span>
      </div>
      <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />
      <div className="w-full flex gap-3 justify-between">
        <div className="w-[350px] flex gap-3 mt-5 items-center">
          <label className="text-lg">Theme : </label>
          <select
            onChange={(e) => handleThemeChange(e)}
            className="border-none rounded-sm px-2 text-lg outline-none w-[250px]"
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
        <div className="flex gap-10">
          <button
            onClick={(e) => handleBorder(e)}
            className={`w-[200px] px-5 mt-5 py-1 border-2 border-black rounded-sm ${
              allData.statBorder ? "bg-black text-white" : ""
            } active:scale-90 transition-all duration-300 ease-in-out`}
          >
            Border
          </button>

          <button
            onClick={(e) => handleLifeTimeCommits(e)}
            className={`w-[220px] px-5 mt-5 py-1 border-2 border-black rounded-sm ${
              allData.statLifeTimeCommit ? "bg-black text-white" : ""
            } active:scale-90 transition-all duration-300 ease-in-out`}
          >
            Lifetime Commits
          </button>

          <button
            onClick={(e) => handlePrivateCommits(e)}
            className={`w-[200px] px-5 mt-5 py-1 border-2 border-black rounded-sm ${
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
        <div className="flex gap-5 mt-5 w-full items-center p-2">
          <img
            className="w-full"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
              allData.github
            }&theme=${
              allData.statTheme
            }&hide_border=${!allData.statBorder}&include_all_commits=${!allData.statLifeTimeCommit}&count_private=${
              allData.statPrivateCommit
            }&layout=compact`}
          />
          <img
            className="w-full"
            src={`https://github-readme-stats.vercel.app/api?username=${
              allData.github
            }&theme=${
              allData.statTheme
            }&hide_border=${!allData.statBorder}&include_all_commits=${!allData.statLifeTimeCommit}&count_private=${!allData.statPrivateCommit}`}
          />

          <img
            className="w-full"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${
              allData.github
            }&theme=${allData.statTheme}&hide_border=${!allData.statBorder}`}
          />
        </div>
      )}
    </div>
  );
};

export default DisplayGithubStats;
