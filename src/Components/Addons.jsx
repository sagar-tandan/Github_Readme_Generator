import React from "react";
import DisplayVisitor from "./Addons/DisplayVisitor";
import DisplayTrophy from "./Addons/DisplayTrophy";
import RandomQuote from "./Addons/RandomQuote";

const Addons = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-12">
      <div className="title w-full flex flex-col gap-3">
        <h1 className="w-full text-2xl font-semibold">Add-ons</h1>
        <p className="text-red-500 text-sm mb-3">
          please wait for images to load after changing any values
        </p>
        <DisplayVisitor />
        <DisplayTrophy />
        <RandomQuote/>
      </div>
    </div>
  );
};

export default Addons;
