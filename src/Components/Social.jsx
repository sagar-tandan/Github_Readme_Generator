import React, { useContext } from "react";
import { AllContext } from "../Context/context";
import dribble from "../assets/SocialSVG/dribble.svg";
import fb from "../assets/SocialSVG/fb.svg";
import github from "../assets/SocialSVG/github.svg";
import insta from "../assets/SocialSVG/instagram.svg";
import hackerrank from "../assets/SocialSVG/hackerrank.svg";
import linkedin from "../assets/SocialSVG/linkedin.svg";
import twitter from "../assets/SocialSVG/twitter.svg";
import yt from "../assets/SocialSVG/youtube.svg";
import geeksforgeek from "../assets/SocialSVG/geeksforgeeks.svg";
import leetcode from "../assets/SocialSVG/leetcode.svg";
import medium from "../assets/SocialSVG/medium.svg";
import kaggle from "../assets/SocialSVG/kaggle.svg";

const Social = () => {
  const { allData, setAllData } = useContext(AllContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAllData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-1">
      <h1 className="w-full text-2xl font-semibold mb-4 lg:mb-8">Socials</h1>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8 md:gap-8 lg:gap-12 xl:gap-14">
        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img className="w-7 h-7 md:w-8 md:h-8" src={fb} alt="" />
          <input
            className="w-full outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg p-1"
            type="text"
            name="facebook"
            value={allData.facebook}
            onChange={(e) => handleChange(e)}
            placeholder="facebook username"
          />
        </div>

        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img className="w-7 h-7 md:w-8 md:h-8" src={github} alt="" />
          <input
            className="w-full outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg p-1"
            type="text"
            name="github"
            value={allData.github}
            onChange={(e) => handleChange(e)}
            placeholder="github username"
          />
        </div>

        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img className="w-7 h-7 md:w-8 md:h-8" src={linkedin} alt="" />

          <input
            className="w-full outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg p-1"
            type="text"
            name="linkedin"
            value={allData.linkedin}
            onChange={(e) => handleChange(e)}
            placeholder="linkedin username"
          />
        </div>
        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img className="w-7 h-7 md:w-8 md:h-8" src={twitter} alt="" />

          <input
            className="w-full outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg p-1"
            type="text"
            name="twitter"
            value={allData.twitter}
            onChange={(e) => handleChange(e)}
            placeholder="twitter username"
          />
        </div>

        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img className="w-7 h-7 md:w-8 md:h-8" src={insta} alt="" />

          <input
            className="w-full outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg p-1"
            type="text"
            name="insta"
            value={allData.insta}
            onChange={(e) => handleChange(e)}
            placeholder="instagram username"
          />
        </div>
        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img className="w-7 h-7 md:w-8 md:h-8" src={yt} alt="" />

          <input
            className="w-full outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg p-1"
            type="text"
            name="youtube"
            value={allData.youtube}
            onChange={(e) => handleChange(e)}
            placeholder="youtube username"
          />
        </div>
        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img className="w-7 h-7 md:w-8 md:h-8" src={hackerrank} alt="" />

          <input
            className="w-full outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg p-1"
            type="text"
            name="hackerrank"
            value={allData.hackerrank}
            onChange={(e) => handleChange(e)}
            placeholder="hackerrank username"
          />
        </div>

        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img className="w-7 h-7 md:w-8 md:h-8" src={dribble} alt="" />

          <input
            className="w-full outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg p-1"
            type="text"
            name="dribble"
            value={allData.dribble}
            onChange={(e) => handleChange(e)}
            placeholder="dribble username"
          />
        </div>

        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img className="w-7 h-7 md:w-8 md:h-8" src={geeksforgeek} alt="" />

          <input
            className="w-full outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg p-1"
            type="text"
            name="GFG"
            value={allData.GFG}
            onChange={(e) => handleChange(e)}
            placeholder="GFG (<username>/profile)"
          />
        </div>

        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img className="w-7 h-7 md:w-8 md:h-8" src={leetcode} alt="" />

          <input
            className="w-full outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg p-1"
            type="text"
            name="leetcode"
            value={allData.leetcode}
            onChange={(e) => handleChange(e)}
            placeholder="leetcode username"
          />
        </div>

        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img className="w-7 h-7 md:w-8 md:h-8" src={medium} alt="" />

          <input
            className="w-full outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg p-1"
            type="text"
            name="medium"
            value={allData.medium}
            onChange={(e) => handleChange(e)}
            placeholder="medium username (with @)"
          />
        </div>

        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img className="w-7 h-7 md:w-8 md:h-8" src={kaggle} alt="" />

          <input
            className="w-full outline-none border-b-2 border-[#d3d3d3] text-sm md:text-lg p-1"
            type="text"
            name="kaggle"
            value={allData.kaggle}
            onChange={(e) => handleChange(e)}
            placeholder="kaggle username"
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
