import React, { useContext, useEffect, useState } from "react";
import { AllContext } from "../../Context/context";
import { HexColorPicker } from "react-colorful";
import "./Custom_ColorPicker.css"; // Import your custom CSS file

const Contribution = () => {
  const { allData, setAllData } = useContext(AllContext);
  const [openBg, setOpenBg] = useState(false);
  const [openLine, setOpenLine] = useState(false);
  const [openPoint, setOpenPoint] = useState(false);
  const [openText, setOpenText] = useState(false);
  const [bgColor, setBgColor] = useState(allData.activityBg);
  const [LineColor, setLineColor] = useState(allData.activityLine);
  const [PointColor, setPointColor] = useState(allData.activityPoint);
  const [TextColor, setTextColor] = useState(allData.activityText);

  useEffect(() => {
    setAllData((prev) => ({ ...prev, activityBg: bgColor }));
  }, [bgColor, setBgColor]);

  useEffect(() => {
    setAllData((prev) => ({ ...prev, activityLine: LineColor }));
  }, [LineColor, setLineColor]);

  useEffect(() => {
    setAllData((prev) => ({ ...prev, activityPoint: PointColor }));
  }, [PointColor, setPointColor]);

  useEffect(() => {
    setAllData((prev) => ({ ...prev, activityText: TextColor }));
  }, [TextColor, setTextColor]);

  const handleClick = () => {
    setAllData((prev) => ({ ...prev, displayActivity: !prev.displayActivity }));
  };

  return (
    <div className="mt-10 w-full flex flex-col">
      <div className="w-full flex gap-3">
        <div
          onClick={handleClick}
          className="checkbox border-2 rounded-sm w-6 h-6 border-black bg-white flex p-1 cursor-pointer"
        >
          <div
            className={`w-full ${
              allData.displayActivity ? "bg-purple-600 rounded-sm" : "bg-white"
            }`}
          ></div>
        </div>
        <span className="text-xl">Contribution Graph</span>
      </div>
      <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />
      <div className="w-full flex gap-3 justify-between mt-5">
        <div className="bgcolor flex gap-2 items-center">
          <span
            onClick={() => setOpenBg((prev) => !prev)}
            className={`w-8 h-8 rounded-full cursor-pointer relative border-2 border-black`}
            style={{ backgroundColor: allData.activityBg }}
          >
            <div
              className={`custom-color-picker absolute top-9 -left-5 ${
                openBg ? "inline" : "hidden"
              }`}
            >
              <HexColorPicker color={bgColor} onChange={setBgColor} />
            </div>
          </span>
          <p>Background Color</p>
        </div>

        <div className="bgcolor flex gap-2 items-center">
          <span
            onClick={() => setOpenLine((prev) => !prev)}
            className="w-8 h-8 border-2 border-black rounded-full cursor-pointer relative"
            style={{ backgroundColor: allData.activityLine }}
          >
            <div
              className={`custom-color-picker absolute top-9 -left-5 ${
                openLine ? "inline" : "hidden"
              }`}
            >
              <HexColorPicker color={LineColor} onChange={setLineColor} />
            </div>
          </span>
          <p>Line Color</p>
        </div>

        <div className="bgcolor flex gap-2 items-center">
          <span
            onClick={() => setOpenPoint((prev) => !prev)}
            className="w-8 h-8 border-2 border-black rounded-full cursor-pointer relative"
            style={{ backgroundColor: allData.activityPoint }}
          >
            <div
              className={`custom-color-picker absolute top-9 -left-5 ${
                openPoint ? "inline" : "hidden"
              }`}
            >
              <HexColorPicker color={PointColor} onChange={setPointColor} />
            </div>
          </span>
          <p>Point Color</p>
        </div>

        <div className="bgcolor flex gap-2 items-center">
          <span
            onClick={() => setOpenText((prev) => !prev)}
            className="w-8 h-8 rounded-full cursor-pointer relative border-2 border-black"
            style={{ backgroundColor: allData.activityText }}
          >
            <div
              className={`custom-color-picker absolute top-9 -left-5 ${
                openText ? "inline" : "hidden"
              }`}
            >
              <HexColorPicker color={TextColor} onChange={setTextColor} />
            </div>
          </span>
          <p>Text Color</p>
        </div>
      </div>
      {allData.github.trim() === "" ? (
        <div className="flex gap-3 mt-5 w-full items-center">
          <p className="text-red-500">Invalid GitHub username</p>
        </div>
      ) : (
        <div className="flex gap-3 mt-5 w-full rounded-sm p-1">
          <img
            className="w-full rounded-sm "
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${
              allData.github
            }&bg_color=${allData.activityBg.replace(
              "#",
              ""
            )}&color=${allData.activityText.replace(
              "#",
              ""
            )}&line=${allData.activityLine.replace(
              "#",
              ""
            )}&point=${allData.activityPoint.replace(
              "#",
              ""
            )}&area=true&hide_border=true`}
            alt="graph"
          />
        </div>
      )}
    </div>
  );
};

export default Contribution;
