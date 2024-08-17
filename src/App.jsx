import "./App.css";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Social from "./Components/Social";

function App() {
  return (
    <div className="w-full flex flex-col p-16 font-Poppins tracking-widest gap-[70px]">
      <Hero />
      <Skills />
      <Social />
    </div>
  );
}

export default App;
