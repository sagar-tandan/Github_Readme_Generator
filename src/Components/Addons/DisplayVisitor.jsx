import React, { useContext, useState } from "react";
import { AllContext } from "../../Context/context";

const DisplayVisitor = () => {
  const { allData, setAllData } = useContext(AllContext);

  const handleClick = () => {
    setAllData((prev) => ({ ...prev, displayVisiter: !prev.displayVisiter }));
  };

  const handleLabelChange = (event) => {
    const value = event.target.value;
    setAllData((prev) => ({ ...prev, visitorLabel: value }));
  };

  const handleColorChange = (event) => {
    const value = event.target.value;
    setAllData((prev) => ({ ...prev, visitorBadgeColor: value }));
  };

  const handleIconChange = (event) => {
    const value = event.target.value;
    setAllData((prev) => ({ ...prev, visitorBadgeIcon: value }));
  };
  return (
    <div className="programming w-full flex flex-col">
      <div className="w-full flex gap-3">
        <div
          onClick={() => handleClick()}
          className="checkbox border-2 rounded-sm w-5 h-5 sm:w-6 sm:h-6 border-black bg-white flex p-[2px] sm:p-1 cursor-pointer"
        >
          <div
            className={`w-full ${
              allData.displayVisiter ? "bg-purple-600 rounded-sm " : "bg-white"
            }`}
          ></div>
        </div>
        <span className="text-lg sm:text-xl">Visitor Count Badge</span>
      </div>
      <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />
      <div className="w-full flex lg:flex-row flex-col gap-3 mt-3 ">
        <div className="w-full flex gap-3 sm:flex-row flex-col">
          <div className="w-[100%] xl:w-[60%] mt-2 sm:mt-5">
            <input
              className="w-full sm:w-[90%] xl:w-[90%] outline-none text-lg border-b-2 border-[#d3d3d3] p-1 "
              type="text"
              name="visitorLabel"
              value={allData.visitorLabel}
              onChange={(e) => handleLabelChange(e)}
              placeholder="Add label "
            />
          </div>

          <div className="w-full lg:w-[60%] xl:w-[50%] flex gap-3 mt-2 sm:mt-5 items-center">
            <label className="text-lg">Color : </label>
            <select
              onChange={(e) => handleColorChange(e)}
              className="border-none rounded-sm px-2 text-lg outline-none sm:w-[50%] w-[60%]"
              name="visitorColor"
              id="visitorColor"
            >
              {[
                "cyan",
                "blue",
                "amber",
                "green",
                "red",
                "rose",
                "indigo",
                "orange",
                "teal",
                "fuchsia",
                "pink",
                "neutral",
              ].map((color, index) => (
                <option className="bg-indigo-50" value={index}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full flex gap-3 sm:flex-row flex-col">
          <div className="w-full lg:w-[60%] xl:w-[50%] flex gap-3 mt-2 sm:mt-5 items-center">
            <label className="text-lg">Icon :</label>
            <select
              onChange={(e) => handleIconChange(e)}
              className="border-none rounded-sm px-2 text-lg outline-none sm:w-[50%] w-[60%]"
              name="visitorIcon"
              id="visitorIcon"
            >
              {[
                "default",
                "bar",
                "code",
                "cursor",
                "emoji",
                "eye",
                "fire",
                "heart",
                "streak",
                "star",
              ].map((icon, index) => (
                <option value={index}>{icon}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3 mt-2 sm:mt-5 w-[85%] items-center">
            {allData.github.trim() === "" ? (
              <p className="text-red-500 text-sm xl:text-lg">
                Invalid github username
              </p>
            ) : (
              <img
                className="w-[80%] h-[40px]"
                src={`https://visitcount.itsvg.in/api?id=${
                  allData.github
                }&label=${encodeURIComponent(allData.visitorLabel)}&color=${
                  allData.visitorBadgeColor
                }&icon=${allData.visitorBadgeIcon}&pretty=true`}
                alt="badge"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayVisitor;
