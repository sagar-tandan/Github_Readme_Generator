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

function App() {
  const { allData, setAllData } = useContext(AllContext);


  return (
    <div className="w-full flex flex-col p-6 sm:p-16 font-Poppins tracking-widest mx-auto">
      {!allData.displayOutput ? (
        <div className="w-full flex flex-col gap-[70px] mx-auto">
          <Hero />
          <Skills />
           <Social />
          {/* <Addons />
          <Support />
          <GenerateReadme />  */}
        </div>
      ) : (
        <div className="w-full flex flex-col">
          <Markdowns />
          <GenerateReadme />
        </div>
      )}
    </div>
  );
}

export default App;
