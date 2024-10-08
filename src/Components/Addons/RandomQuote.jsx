import React, { useContext } from "react";
import { AllContext } from "../../Context/context";

const RandomQuote = () => {
  const { allData, setAllData } = useContext(AllContext);

  const handleThemeChange = (event) => {
    const value = event.target.value;
    setAllData((prev) => ({ ...prev, quoteTheme: value }));
  };

  const handleClick = () => {
    setAllData((prev) => ({ ...prev, displayQuote: !prev.displayQuote }));
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
              allData.displayQuote ? "bg-purple-600 rounded-sm " : "bg-white"
            }`}
          ></div>
        </div>
        <span className="text-lg sm:text-xl">Random Quote</span>
      </div>
      <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />
      <div className="w-full flex gap-3 justify-between">
        <div className="w-[90%] sm:w-[350px] flex gap-3 mt-5 items-center">
          <label className="text-lg">Theme : </label>
          <select
            onChange={(e) => handleThemeChange(e)}
            className="border-none rounded-sm px-2 text-lg outline-none w-[50%] sm:w-[250px]"
            name="quoteTheme"
            id="quoteTheme"
            value={allData.quoteTheme}
          >
            {[
              "default",
              "radical",
              "gruvbox",
              "tokyonight",
              "dracula",
              "onedark",
              "algolia",
            ].map((theme, index) => (
              <option value={theme}>{theme}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-3 mt-5 w-full items-center">
        {allData.github.trim() === "" ? (
          <p className="text-red-500">Invalid github username</p>
        ) : (
          <img
            className="object-center"
            src={`https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${allData.quoteTheme}`}
            alt="quote"
          />
        )}
      </div>
    </div>
  );
};

export default RandomQuote;
