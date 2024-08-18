import React from "react";

const GenerateReadme = () => {
  return (
    <div className="w-full mt-10 flex justify-center items-center pb-20">
      <button
        className="w-[250px] h-[60px] relative generate-button rounded-full"
        type="button"
      >
        <div className="readmeTop relative overflow-hidden w-full h-full text-[16px] flex items-center justify-center rounded-full border-2 border-black bg-white transition-all duration-200">
          Generate README
        </div>
        <div className="readmeBottom absolute w-full h-full bg-orange-100 top-[10px] left-0 rounded-full border-2 border-black z-[-1]"></div>
      </button>
    </div>
  );
};

export default GenerateReadme;
