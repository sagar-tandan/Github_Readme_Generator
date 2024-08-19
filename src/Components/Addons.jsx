import React from "react";
import DisplayVisitor from "./Addons/DisplayVisitor.jsx";
import DisplayTrophy from "./Addons/DisplayTrophy.jsx";
import RandomQuote from "./Addons/RandomQuote.jsx";
import DisplayGithubStats from "./Addons/DisplayGithubStats.jsx";
import Contribution from "./Addons/Contribution.jsx";

const Addons = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-12">
      <div className="title w-full flex flex-col gap-3">
        <h1 className="w-full text-2xl font-semibold">Add-ons</h1>
        <p className="text-red-500 text-sm mb-3">
          please wait for images to load after changing any values
        </p>
        {/* <DisplayVisitor /> */}
        <DisplayTrophy />
        <RandomQuote />
        {/* <DisplayGithubStats /> */}
        <Contribution />
      </div>
    </div>
  );
};

export default Addons;
