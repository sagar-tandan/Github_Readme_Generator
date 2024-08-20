import { useContext, useEffect } from "react";
import "./App.css";
import Addons from "./Components/Addons";
import GenerateReadme from "./Components/GenerateReadme";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Social from "./Components/Social";
import Support from "./Components/Support";
import { AllContext } from "./Context/context";
import Markdowns from "./Components/Markdown";
import Header from "./Components/Header";

function App() {
  const { allData, setAllData } = useContext(AllContext);

  return (
    <div className="w-full flex flex-col font-Poppins tracking-widest mx-auto relative overflow-x-hidden">
      <Header />
      {!allData.displayOutput ? (
        <div className="w-full flex flex-col gap-[35px] sm:gap-[70px] mx-auto p-6 md:p-10 lg:p-16 mt-16 sm:mt-20 lg:mt-10">
          <Hero />
          <Skills />
          <Social />
          <Addons />
          <Support />
          <GenerateReadme />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-[35px] sm:gap-[70px] p-6 md:p-10 lg:p-16 mt-16 sm:mt-20 lg:mt-10">
          <Markdowns />
          <GenerateReadme />
        </div>
      )}
    </div>
  );
}

export default App;
