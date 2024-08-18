import React, { useContext, useState } from "react";
import { AllContext } from "../Context/context.jsx";

const Hero = () => {
  const { allData, setAllData } = useContext(AllContext);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAllData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-12">
      <div className="title w-full flex flex-col gap-3">
        <h1 className="w-full text-2xl font-semibold">Title</h1>
        <div className="w-full flex gap-10">
          <input
            className="w-[250px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="Nametitle"
            value={allData.Nametitle}
            onChange={handleChange}
          />
          <input
            className="w-[400px] outline-none border-b-2 border-[#d3d3d3] text-xl"
            type="text"
            name="Name"
            value={allData.Name}
            onChange={handleChange}
            placeholder="name"
          />
        </div>
      </div>
      <div className="title w-full flex flex-col gap-3">
        <h1 className="w-full text-2xl font-semibold">Subtitle</h1>
        <div className="w-full flex gap-10">
          <input
            className="w-[680px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="subtitle"
            value={allData.subtitle}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="title w-full flex flex-col gap-3">
        <h1 className="w-full text-2xl font-semibold">Work</h1>
        <div className="w-full flex gap-10">
          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="worktitle"
            value={allData.worktitle}
            onChange={handleChange}
          />

          <input
            className="w-[350px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="work"
            value={allData.work}
            onChange={handleChange}
            placeholder="project name"
          />
          <input
            className="w-[350px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="worklink"
            value={allData.worklink}
            onChange={handleChange}
            placeholder="project link"
          />
        </div>

        <div className="w-full flex gap-10 mt-6">
          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="collabtitle"
            value={allData.collabtitle}
            onChange={handleChange}
          />

          <input
            className="w-[350px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="collab"
            value={allData.collab}
            onChange={handleChange}
            placeholder="project name"
          />
          <input
            className="w-[350px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="collablink"
            value={allData.collablink}
            onChange={handleChange}
            placeholder="project link"
          />
        </div>

        <div className="w-full flex gap-10 mt-6">
          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="helptitle"
            value={allData.helptitle}
            onChange={handleChange}
          />

          <input
            className="w-[350px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="help"
            value={allData.help}
            onChange={handleChange}
            placeholder="project name"
          />
          <input
            className="w-[350px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="helplink"
            value={allData.helplink}
            onChange={handleChange}
            placeholder="project link"
          />
        </div>

        <div className="w-full flex gap-10 mt-6">
          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="learntitle"
            value={allData.learntitle}
            onChange={handleChange}
          />

          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="learn"
            value={allData.learn}
            onChange={handleChange}
            placeholder="frameworks, courses etc."
          />
        </div>

        <div className="w-full flex gap-10 mt-6">
          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="asktitle"
            value={allData.asktitle}
            onChange={handleChange}
          />

          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="ask"
            value={allData.ask}
            onChange={handleChange}
            placeholder="react, .net, angular "
          />
        </div>

        <div className="w-full flex gap-10 mt-6">
          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="emailtitle"
            value={allData.emailtitle}
            onChange={handleChange}
          />

          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="email"
            value={allData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
        </div>

        <div className="w-full flex gap-10 mt-6">
          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="projecttitle"
            value={allData.projecttitle}
            onChange={handleChange}
          />

          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="project"
            value={allData.project}
            onChange={handleChange}
            placeholder="portfolio link"
          />
        </div>

        <div className="w-full flex gap-10 mt-6">
          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="articletitle"
            value={allData.articletitle}
            onChange={handleChange}
          />

          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="article"
            value={allData.article}
            onChange={handleChange}
            placeholder="blog link"
          />
        </div>

        <div className="w-full flex gap-10 mt-6">
          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="exptitle"
            value={allData.exptitle}
            onChange={handleChange}
          />

          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="exp"
            value={allData.exp}
            onChange={handleChange}
            placeholder="resume link"
          />
        </div>

        <div className="w-full flex gap-10 mt-6">
          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="funtitle"
            value={allData.funtitle}
            onChange={handleChange}
          />

          <input
            className="w-[450px] outline-none border-b-2 border-[#d3d3d3] text-xl p-1"
            type="text"
            name="fun"
            value={allData.fun}
            onChange={handleChange}
            placeholder="I am a bad boy!"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
