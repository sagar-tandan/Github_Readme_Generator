import "./App.css";
import Addons from "./Components/Addons";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Social from "./Components/Social";
import Support from "./Components/Support";

function App() {
  return (
    <div className="w-full flex flex-col p-16 font-Poppins tracking-widest gap-[70px]">
      <Hero />
      <Skills />
      <Social />
      <Addons />
      <Support />
    </div>
  );
}

export default App;
