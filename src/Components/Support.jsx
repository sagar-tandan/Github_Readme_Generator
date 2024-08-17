import React, { useContext } from "react";
import { AllContext } from "../Context/context";

const Support = () => {
  const { allData, setAllData } = useContext(AllContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAllData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-1">
      <h1 className="w-full text-2xl font-semibold mb-8">Support</h1>
      <div className="w-full flex gap-32">
        <div className="w-[50%] flex gap-5">
          <img
            className="w-[200px] h-[50px] "
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt=""
          />
          <input
            className="outline-none border-b-2 border-[#d3d3d3] text-xl w-full"
            type="text"
            name="buymeacoffee"
            value={allData.buymeacoffee}
            onChange={handleChange}
            placeholder="buymeacoffee username"
          />
        </div>

        <div className="w-[50%] flex gap-5">
          <img
            className="w-[200px] h-[50px] "
            src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
            alt=""
          />
          <input
            className="outline-none border-b-2 border-[#d3d3d3] text-xl w-full"
            type="text"
            name="kofi"
            value={allData.kofi}
            onChange={handleChange}
            placeholder="Ko-fi username"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
