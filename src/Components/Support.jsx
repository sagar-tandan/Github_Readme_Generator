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
      <h1 className="w-full text-2xl font-semibold mb-2 xl:mb-4">Support</h1>
      <div className="w-full flex justify-between gap-5">
        <div className="w-[50%] flex gap-2 lg:gap-5">
          <img
            className="w-[30%] h-[20px] sm:w-[100px] sm:h-[25px] md:w-[140px] md:h-[35px] xl:w-[200px] xl:h-[50px] object-cover rounded-sm sm:inline hidden"
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt=""
          />
          <img
            className="w-7 h-7 rounded-sm sm:hidden inline"
            src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5c58570cfdd26f0001068f06/0x0.png"
            alt=""
          />
          <input
            className="outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg lg:text-xl md:w-[250px] lg:w-[300px] w-[70%]"
            type="text"
            name="buymeacoffee"
            value={allData.buymeacoffee}
            onChange={handleChange}
            placeholder="buymeacoffee username"
          />
        </div>

        <div className="w-[50%] flex gap-2 lg:gap-5">
          <img
            className="w-[30%] h-[20px] sm:w-[100px] sm:h-[25px] md:w-[140px] md:h-[35px] xl:w-[200px] xl:h-[50px] object-cover rounded-sm sm:inline hidden"
            src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
            alt=""
          />
          <img
            className="w-7 h-7 rounded-sm sm:hidden inline"
            src="https://cdn-icons-png.flaticon.com/128/2935/2935413.png"
            alt=""
          />
         
          <input
            className="outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg lg:text-xl md:w-[250px] lg:w-[300px] w-[70%]"
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
